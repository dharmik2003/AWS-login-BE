import "dotenv/config";
import { Request, Response } from "express";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../config/data-source";
import {
  ERROR_MESSAGES,
  HTTP_STATUS_CODES,
  SUCCESS_MESSAGES,
} from "../../constants";
import { Error, Success } from "../../utils/response.utils";

const JWT_SECRET = process.env.SECRET_KEY || "Dharmik";

export const loginService = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return Error(
        ERROR_MESSAGES._InputMisssing("email and password"),
        HTTP_STATUS_CODES.BAD_REQUEST
      );
    }
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { email } });

    if (user) {
      if (user.password === password) {
        console.log("password correct");
        const details = {
          userId: user.id,
          email: user.email,
          password: user.password,
        };

        return Success(
          SUCCESS_MESSAGES._SUCCESSFULLY("Login"),
          HTTP_STATUS_CODES.OK,
          details
        );
      } else {
        return Error(
          ERROR_MESSAGES._NotFound("password"),
          HTTP_STATUS_CODES.NOT_FOUND
        );
      }
    } else {
      return Error(
        ERROR_MESSAGES._NotFound("Invalid phone number or password"),
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }
  } catch (error) {
    console.log("Error while loginService:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError("loginService"),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
