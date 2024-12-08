"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP_STATUS_CODES = exports.FILE_ENCODINGS = exports.SUCCESS_MESSAGES = exports.ERROR_MESSAGES = void 0;
exports.ERROR_MESSAGES = {
    // helpers Function
    _NotFound(str, appender = "") {
        const finalAppender = appender ? appender : ", not available in system";
        return `${str} ${finalAppender}`;
    },
    _InternalServerError(str, appender = "") {
        const finalAppender = appender ? appender : "Server Error";
        return `${str} ${finalAppender}`;
    },
    _FunctionCatchError(str, appender = "") {
        const finalAppender = appender ? appender : `Error while ${str}`;
        return `${finalAppender}`;
    },
    _Unauthorized(str, appender = "") {
        const finalAppender = appender ? appender : ", unauthorized access";
        return `${str} ${finalAppender}`;
    },
    _InputMisssing(str, appender = "") {
        const finalAppender = appender ? appender : ", Missing Data";
        return `${str} ${finalAppender}`;
    },
    //Download file from server side
    FILE_DWNLD_FAILED: "",
};
exports.SUCCESS_MESSAGES = {
    _FETCHED(str, appender = "") {
        const finalAppender = appender ? appender : "available in system";
        return `${str} ${finalAppender}`;
    },
    _SUCCESSFULLY(str, appender = "") {
        const finalAppender = appender ? appender : `${str} successfully`;
        return ` ${finalAppender}`;
    },
};
exports.FILE_ENCODINGS = {
    UTF_8: "utf-8",
};
exports.HTTP_STATUS_CODES = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    VALIDATION_FAILED: 417,
    INTERNAL_SERVER_ERROR: 500,
};
