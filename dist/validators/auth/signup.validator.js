"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const authValidationSchema = {
    firstName: joi_1.default.string().min(1).max(50).required(),
    lastName: joi_1.default.string().min(1).max(50).required(),
    phoneNumber: joi_1.default.string()
        .pattern(/^\d{10}$/)
        .required(),
    email: joi_1.default.string().email().max(40).required(),
    password: joi_1.default.string().min(6).max(15).required(),
    address: joi_1.default.string().min(1).max(255).required(),
};
exports.signupValidator = joi_1.default.object().keys(authValidationSchema);
