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
exports.loginService = void 0;
require("dotenv/config");
const user_entity_1 = require("../../entities/user.entity");
const data_source_1 = require("../../config/data-source");
const constants_1 = require("../../constants");
const response_utils_1 = require("../../utils/response.utils");
const JWT_SECRET = process.env.SECRET_KEY || "Dharmik";
const loginService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return (0, response_utils_1.Error)(constants_1.ERROR_MESSAGES._InputMisssing("email and password"), constants_1.HTTP_STATUS_CODES.BAD_REQUEST);
        }
        const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
        const user = yield userRepository.findOne({ where: { email } });
        if (user) {
            if (user.password === password) {
                console.log("password correct");
                const details = {
                    userId: user.id,
                    email: user.email,
                    password: user.password,
                };
                return (0, response_utils_1.Success)(constants_1.SUCCESS_MESSAGES._SUCCESSFULLY("Login"), constants_1.HTTP_STATUS_CODES.OK, details);
            }
            else {
                return (0, response_utils_1.Error)(constants_1.ERROR_MESSAGES._NotFound("password"), constants_1.HTTP_STATUS_CODES.NOT_FOUND);
            }
        }
        else {
            return (0, response_utils_1.Error)(constants_1.ERROR_MESSAGES._NotFound("Invalid phone number or password"), constants_1.HTTP_STATUS_CODES.NOT_FOUND);
        }
    }
    catch (error) {
        console.log("Error while loginService:", error);
        return (0, response_utils_1.Error)(constants_1.ERROR_MESSAGES._FunctionCatchError("loginService"), constants_1.HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
});
exports.loginService = loginService;
