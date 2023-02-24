import express from "express";
import { config } from "dotenv";
import cors from "cors";
import "../database/index.js";
import { router as userRouter } from "./routes/users.js";

config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use(userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Started server on port ${process.env.PORT}`);
});
