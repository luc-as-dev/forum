import mongoose from "mongoose";
import { User } from "./user.js";
import { Question } from "./question.js";
import { Comment } from "./comment.js";

const answerSchema = new mongoose.Schema(
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
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },
    votes: {
      type: [
        {
          author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
          },
          isUp: { type: Boolean, required: true },
        },
      ],
      required: false,
    },
    comments: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Comment",
    },
  },
  {
    timestamps: true,
  }
);

export const Answer = new mongoose.model("Answer", answerSchema);
