"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const validate_request_middlewares_1 = require("../../src/middlewares//validate-request.middlewares");
const signup_validator_1 = require("../validators/auth/signup.validator");
const login_validators_1 = require("../validators/auth/login.validators");
const router = express_1.default.Router();
router.post("/signup", (0, validate_request_middlewares_1.Validate)(signup_validator_1.signupValidator), userController_1.Signup);
router.post("/login", (0, validate_request_middlewares_1.Validate)(login_validators_1.loginValidator), userController_1.Login);
router.get("/users", userController_1.getUserList);
router.get("/", (req, res) => {
    "Welcome to india";
});
exports.default = router;
