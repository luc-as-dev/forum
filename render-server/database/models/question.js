import mongoose from "mongoose";
import { User } from "./user.js";
import { Answer } from "./Answer.js";
import { Tag } from "./tag.js";

const questionSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    tag: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
    },
    answers: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Answer",
    },
    views: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Question = new mongoose.model("Question", questionSchema);
