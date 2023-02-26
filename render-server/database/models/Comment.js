import mongoose from "mongoose";
import { User } from "./user.js";
import { Answer } from "./answer.js";

const commentSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    answer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Answer",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Comment = new mongoose.model("Comment", commentSchema);
