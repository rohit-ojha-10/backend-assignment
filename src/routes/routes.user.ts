import { Router } from "express";
import { addUser, deleteUser, getCount, getUser, reset, updateUser } from "../controller/user.controller.js";
const userRouter = Router();

userRouter.post("/", addUser);
userRouter.get("/", getUser);
userRouter.patch("/", updateUser);
userRouter.delete("/", deleteUser);
userRouter.get("/count", getCount);
userRouter.get("/reset", reset);


export default userRouter;
