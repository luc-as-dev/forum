import express from "express";
import { config } from "dotenv";
import "../database/index.js";
import { router as userRouter } from "./routers/users.js";
import customCors from "./middleware/customCors.js";

config();

const app = express();

const { ORIGIN_WHITELIST, PORT } = process.env;

app.use(customCors(ORIGIN_WHITELIST));
app.use(express.json());

app.use(express.static("public"));
app.use((req, res, next) => {
  setTimeout(next, 500);
});
app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Started server on port ${PORT}`);
});
