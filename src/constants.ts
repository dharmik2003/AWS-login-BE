export const ERROR_MESSAGES = {
  // helpers Function
  _NotFound(str: string, appender = "") {
    const finalAppender = appender ? appender : ", not available in system";
    return `${str} ${finalAppender}`;
  },
  _InternalServerError(str: string, appender = "") {
    const finalAppender = appender ? appender : "Server Error";
    return `${str} ${finalAppender}`;
  },
  _FunctionCatchError(str: string, appender = "") {
    const finalAppender = appender ? appender : `Error while ${str}`;
    return `${finalAppender}`;
  },
  _Unauthorized(str: string, appender = "") {
    const finalAppender = appender ? appender : ", unauthorized access";
    return `${str} ${finalAppender}`;
  },
  _InputMisssing(str: string, appender = "") {
    const finalAppender = appender ? appender : ", Missing Data";
    return `${str} ${finalAppender}`;
  },

  //Download file from server side
  FILE_DWNLD_FAILED: "",
};

export const SUCCESS_MESSAGES = {
  _FETCHED(str: string, appender = "") {
    const finalAppender = appender ? appender : "available in system";
    return `${str} ${finalAppender}`;
  },
  _SUCCESSFULLY(str: string, appender = "") {
    const finalAppender = appender ? appender : `${str} successfully`;
    return ` ${finalAppender}`;
  },
};

export const FILE_ENCODINGS = {
  UTF_8: "utf-8",
};

export const HTTP_STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  VALIDATION_FAILED: 417,
  INTERNAL_SERVER_ERROR: 500,
};
