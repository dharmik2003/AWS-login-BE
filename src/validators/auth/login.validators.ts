import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const authValidationSchema = {
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(6).max(15).required(),
};

export const loginValidator = Joi.object().keys(authValidationSchema);
