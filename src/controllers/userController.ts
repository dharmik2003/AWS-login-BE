import { Request, Response } from "express";
import { signupService } from "../services/auth/signup.service";
import { fetchUserList } from "../services/userList.service";
import { loginService } from "../services/auth/login.service";

// Login Controller
export const Signup = async (req: Request, res: Response) => {
  try {
    const user = await signupService(req, res);

    if (user) {
      res.status(200).json({ message: "Login successful", user });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error: unknown) {
    // Explicitly type the error as 'unknown'
    if (error instanceof Error) {
      res.status(500).json({ message: "Server error", error: error.message });
    } else {
      res.status(500).json({ message: "Unknown error occurred" });
    }
  }
};

export const Login = async (req: Request, res: Response) => {
  try {
    const user = await loginService(req, res);

    if (user) {
      res.status(200).json({ message: "Login successful", user });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error: unknown) {
    // Explicitly type the error as 'unknown'
    if (error instanceof Error) {
      res.status(500).json({ message: "Server error", error: error.message });
    } else {
      res.status(500).json({ message: "Unknown error occurred" });
    }
  }
};

// Get User List Controller
export const getUserList = async (req: Request, res: Response) => {
  try {
    const users = await fetchUserList(req, res);
    res.status(200).json(users);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: "Server error", error: error.message });
    } else {
      res.status(500).json({ message: "Unknown error occurred" });
    }
  }
};
