"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserList = exports.Login = exports.Signup = void 0;
const signup_service_1 = require("../services/auth/signup.service");
const userList_service_1 = require("../services/userList.service");
const login_service_1 = require("../services/auth/login.service");
// Login Controller
const Signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, signup_service_1.signupService)(req, res);
        if (user) {
            res.status(200).json({ message: "Login successful", user });
        }
        else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    }
    catch (error) {
        // Explicitly type the error as 'unknown'
        if (error instanceof Error) {
            res.status(500).json({ message: "Server error", error: error.message });
        }
        else {
            res.status(500).json({ message: "Unknown error occurred" });
        }
    }
});
exports.Signup = Signup;
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, login_service_1.loginService)(req, res);
        if (user) {
            res.status(200).json({ message: "Login successful", user });
        }
        else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    }
    catch (error) {
        // Explicitly type the error as 'unknown'
        if (error instanceof Error) {
            res.status(500).json({ message: "Server error", error: error.message });
        }
        else {
            res.status(500).json({ message: "Unknown error occurred" });
        }
    }
});
exports.Login = Login;
// Get User List Controller
const getUserList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userList_service_1.fetchUserList)(req, res);
        res.status(200).json(users);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: "Server error", error: error.message });
        }
        else {
            res.status(500).json({ message: "Unknown error occurred" });
        }
    }
});
exports.getUserList = getUserList;
