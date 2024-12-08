import { Responsetype } from "../Types/response.types";

export const Success = (
  msg: string,
  getcode: number,
  dataGet: any
): Responsetype => {
  let data = {
    success: true,
    message: msg,
    payload: dataGet,
    code: getcode,
    error: false,
  };
  return data;
};

export const Error = (msg: string, statusCode = 500): Responsetype => {
  let data = {
    success: false,
    message: msg,
    error: true,
    payload: [],
    code: statusCode,
  };
  return data;
};
