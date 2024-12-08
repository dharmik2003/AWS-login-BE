"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = exports.Success = void 0;
const Success = (msg, getcode, dataGet) => {
    let data = {
        success: true,
        message: msg,
        payload: dataGet,
        code: getcode,
        error: false,
    };
    return data;
};
exports.Success = Success;
const Error = (msg, statusCode = 500) => {
    let data = {
        success: false,
        message: msg,
        error: true,
        payload: [],
        code: statusCode,
    };
    return data;
};
exports.Error = Error;
