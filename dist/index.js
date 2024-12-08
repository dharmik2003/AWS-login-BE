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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./config/data-source");
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
require("dotenv/config");
require("reflect-metadata");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const constants_1 = require("./constants");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 5001;
data_source_1.AppDataSource.initialize()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`${constants_1.SUCCESS_MESSAGES._SUCCESSFULLY("Database Conntected")}`);
    app.use((0, cors_1.default)({ origin: "http://localhost:3000", credentials: true }));
    app.use(body_parser_1.default.json());
    // app.use(cookieParser());
    app.use("/", userRoutes_1.default);
}))
    .catch((error) => {
    console.log(`${constants_1.ERROR_MESSAGES._InternalServerError("Database Not Connected")}`);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
