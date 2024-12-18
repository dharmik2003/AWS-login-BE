import express, { Request, Response } from "express";
import { getUserList, Login, Signup } from "../controllers/userController";
import { signupValidator } from "../validators/auth/signup.validator";
import { loginValidator } from "../validators/auth/login.validators";

const router = express.Router();

router.post("/signup", signupValidator, Signup);
router.post("/login", loginValidator, Login);
router.get("/users", getUserList);

router.get("/", (req, res) => {
  "Welcome to india";
});

export default router;
