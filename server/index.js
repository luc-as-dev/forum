import express from "express";
import { config } from "dotenv";
import "../database/index.js";
import { router as userRouter } from "./routes/users.js";

config();

const app = express();

app.use(express.json());

app.use(userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Started server on port ${process.env.PORT}`);
});
