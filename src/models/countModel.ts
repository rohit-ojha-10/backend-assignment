import mongoose, { Schema } from "mongoose";
import { Counter } from "../types/models.types.js";

const countSchema: Schema<Counter> = new Schema({
  additions: {
    type: Number,
    required: true,
  },
  updations: {
    type: Number,
    required: true,
  },
  deletions: {
    type: Number,
    required: true,
  },
});

const countModel = mongoose.model<Counter>("count", countSchema, "count");

export default countModel;
