import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import {
  ERROR_MESSAGES,
  HTTP_STATUS_CODES,
  SUCCESS_MESSAGES,
} from "../constants";
import { User } from "../entities/user.entity";
import { Success, Error } from "../utils/response.utils";

// Simulate user authentication (for example purposes)
export const fetchUserList = async (req: Request, res: Response) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();

    console.log("users",users);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY("Signup"),
      HTTP_STATUS_CODES.OK,
      users
    );
  } catch (error) {
    console.log("Error while loginService:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError("loginService"),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
