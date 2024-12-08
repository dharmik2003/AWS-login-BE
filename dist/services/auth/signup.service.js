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
exports.signupService = void 0;
const data_source_1 = require("../../config/data-source");
const constants_1 = require("../../constants");
const user_entity_1 = require("../../entities/user.entity");
const response_utils_1 = require("../../utils/response.utils");
// Simulate user authentication (for example purposes)
const signupService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, address, phoneNumber, email, password } = req.body;
        const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
        const existingUser = yield userRepository.findOne({
            where: { email },
        });
        if (existingUser) {
            return (0, response_utils_1.Error)(constants_1.SUCCESS_MESSAGES._FETCHED("Phone number already exists"), constants_1.HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
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
        yield userRepository.save(newUser);
        return (0, response_utils_1.Success)(constants_1.SUCCESS_MESSAGES._SUCCESSFULLY("Signup"), constants_1.HTTP_STATUS_CODES.OK, newUser);
    }
    catch (error) {
        console.log("Error while loginService:", error);
        return (0, response_utils_1.Error)(constants_1.ERROR_MESSAGES._FunctionCatchError("loginService"), constants_1.HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
});
exports.signupService = signupService;
