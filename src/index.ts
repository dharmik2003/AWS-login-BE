import { AppDataSource } from "./config/data-source";
import bodyParser from "body-parser";
import express from "express";
import "dotenv/config";
import "reflect-metadata";
import router from "./routes/userRoutes";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "./constants";
import cors from "cors";

const app = express();
const PORT = 5001;

AppDataSource.initialize()
  .then(async () => {
    console.log(`${SUCCESS_MESSAGES._SUCCESSFULLY("Database Conntected")}`);
    app.use(cors());
    app.use(bodyParser.json());
    // app.use(cookieParser());
    app.use("/", router);
  })
  .catch((error) => {
    console.log(
      `${ERROR_MESSAGES._InternalServerError("Database Not Connected")}`
    );
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
