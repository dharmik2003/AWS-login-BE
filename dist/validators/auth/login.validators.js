"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const authValidationSchema = {
    email: joi_1.default.string()
        .email({ tlds: { allow: false } })
        .required(),
    password: joi_1.default.string().min(6).max(15).required(),
};
exports.loginValidator = joi_1.default.object().keys(authValidationSchema);
