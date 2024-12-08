import { Request, Response } from "express";
import { AppDataSource } from "../../config/data-source";
import {
  ERROR_MESSAGES,
  HTTP_STATUS_CODES,
  SUCCESS_MESSAGES,
} from "../../constants";
import { User } from "../../entities/user.entity";
import { Success, Error } from "../../utils/response.utils";

// Simulate user authentication (for example purposes)
export const signupService = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, address, phoneNumber, email, password } =
      req.body;

    const userRepository = AppDataSource.getRepository(User);
    const existingUser = await userRepository.findOne({
      where: { email },
    });

    if (existingUser) {
      return Error(
        SUCCESS_MESSAGES._FETCHED("Phone number already exists"),
        HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
      );
    }

    const newUser = userRepository.create({
      firstName: firstName,
      lastName: lastName,
      address: address,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
    });
    console.log(newUser);

    await userRepository.save(newUser);

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY("Signup"),
      HTTP_STATUS_CODES.OK,
      newUser
    );
  } catch (error) {
    console.log("Error while loginService:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError("loginService"),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
