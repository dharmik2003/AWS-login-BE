import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const authValidationSchema = {
  firstName: Joi.string().min(1).max(50).required(),
  lastName: Joi.string().min(1).max(50).required(),
  phoneNumber: Joi.string()
    .pattern(/^\d{10}$/)
    .required(),
  email: Joi.string().email().max(40).required(),
  password: Joi.string().min(6).max(15).required(),
  address: Joi.string().min(1).max(255).required(),
};

export const signupValidator = Joi.object().keys(authValidationSchema);
