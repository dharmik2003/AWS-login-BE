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
exports.fetchUserList = void 0;
const data_source_1 = require("../config/data-source");
const constants_1 = require("../constants");
const user_entity_1 = require("../entities/user.entity");
const response_utils_1 = require("../utils/response.utils");
// Simulate user authentication (for example purposes)
const fetchUserList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
        const users = yield userRepository.find();
        console.log("users", users);
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        return (0, response_utils_1.Success)(constants_1.SUCCESS_MESSAGES._SUCCESSFULLY("Signup"), constants_1.HTTP_STATUS_CODES.OK, users);
    }
    catch (error) {
        console.log("Error while loginService:", error);
        return (0, response_utils_1.Error)(constants_1.ERROR_MESSAGES._FunctionCatchError("loginService"), constants_1.HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
});
exports.fetchUserList = fetchUserList;
