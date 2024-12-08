import express, { Request, Response } from "express";
import { getUserList, Login, Signup } from "../controllers/userController";
import { Validate } from "../../src/middlewares//validate-request.middlewares";
import { signupValidator } from "../validators/auth/signup.validator";
import { loginValidator } from "../validators/auth/login.validators";

const router = express.Router();

router.post("/signup", Validate(signupValidator), Signup);
router.post("/login", Validate(loginValidator), Login);
router.get("/users", getUserList);

router.get("/", (req, res) => {
  "Welcome to india";
});

export default router;
