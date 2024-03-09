import dotenv from "dotenv";
// Load environment variables from .env file
dotenv.config();
export const PORT = process.env.PORT || 3000;
export const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/";
