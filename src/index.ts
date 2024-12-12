// import { AppDataSource } from "./config/data-source";
// import bodyParser from "body-parser";
// import express from "express";
// import "dotenv/config";
// import "reflect-metadata";
// import router from "./routes/userRoutes";
// import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "./constants";
// import cors from "cors";

// const app = express();
// const PORT = 5001;

// AppDataSource.initialize()
//   .then(async () => {
//     console.log(`${SUCCESS_MESSAGES._SUCCESSFULLY("Database Conntected")}`);
//     app.use(cors());
//     app.use(bodyParser.json());
//     // app.use(cookieParser());
//     app.use("/", router);
//   })
//   .catch((error) => {
//     console.log(
//       `${ERROR_MESSAGES._InternalServerError("Database Not Connected")}`
//     );
//   });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


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

app.use(cors());
app.use(bodyParser.json());
// app.use(cookieParser());

// Database connection setup and error handling
AppDataSource.initialize()
  .then(async () => {
    console.log(`${SUCCESS_MESSAGES._SUCCESSFULLY("Database Connected")}`);
    app.use("/", router); // Only add routes after successful DB connection
  })
  .catch((error) => {
    console.error(`${ERROR_MESSAGES._InternalServerError("Database Not Connected")}: ${error.message}`);
    process.exit(1); // Exit the process if database connection fails
  });

// Global error handling middleware to catch any errors from route handlers
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  if (!res.headersSent) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server only after the database connection is successful
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
