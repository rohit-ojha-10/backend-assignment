import mongoose from "mongoose";
import { DATABASE_URL } from "../utils/env.js";
const establishDbConnection = async () => {
  mongoose.connect(DATABASE_URL).then(() => console.log("connected"));
  const db = mongoose.connection;
  db.on("error", (error) => console.error(error));
  db.once("open", () => console.log("database connected"));
};
export default establishDbConnection;
