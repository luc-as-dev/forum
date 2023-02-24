import { config } from "dotenv";
import mongoose from "mongoose";

config({ path: "../database/.env" });

mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB);
