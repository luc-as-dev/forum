import "../database/index.js";
import express from "express";
import { config } from "dotenv";

config();

const app = express();

app.use(express.json());

app.get("*", (req, res) => {
  res.send("Forum");
});

app.listen(process.env.PORT, () => {
  console.log(`Started server on port ${process.env.PORT}`);
});
