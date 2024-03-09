import { getCounter } from "../functions/getCounter.js";
import { resetCounter } from "../functions/resetCounter.js";
import { updateCounter } from "../functions/updateCounter.js";
import UserModel from "../models/UserModel.js";
import { CustomRequest, CustomResponse } from "../types/custom.types.js";
import { Counter, IUser } from "../types/models.types.js";

type AddUser = (req: CustomRequest, res: CustomResponse) => void;

export const addUser: AddUser = async (req, res) => {
  try {
    const userData: IUser = req.body;
    const newUser = new UserModel({
      ...userData,
    });
    await newUser.save();
    await updateCounter("additions");
    return res.status(202).send({ data: newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error });
  }
};

type GetUser = (req: CustomRequest, res: CustomResponse) => void;

export const getUser: GetUser = async (req, res) => {
  try {
    const { name } = req.query;
    const query = await UserModel.findOne({ name });
    console.log({ query });
    return res.status(200).send({ data: query });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error });
  }
};

type updateUser = (req: CustomRequest, res: CustomResponse) => void;

export const updateUser: updateUser = async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const updatedUser = await UserModel.findOneAndUpdate(
      { name },
      { $set: { name, email, role } },
      { new: true }
    );
    await updateCounter("updations");
    console.log({ updatedUser });
    return res.status(200).send({ data: updatedUser });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error });
  }
};

type getCount = (req: CustomRequest, res: CustomResponse) => void;

export const getCount: getCount = async (_req, res) => {
  try {
    const data: Counter = await getCounter();
    return res.status(202).send({ data });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error });
  }
};

type deleteUser = (req: CustomRequest, res: CustomResponse) => void;

export const deleteUser: deleteUser = async (req, res) => {
  try {
    const { name } = req.query;
    const query = await UserModel.deleteOne({ name });
    await updateCounter("deletions");
    console.log({ query });
    return res.status(204).send({ data: query });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error });
  }
};

type reset = (req: CustomRequest, res: CustomResponse) => void;

export const reset: reset = async (_req, res) => {
  try {
    const query = await UserModel.deleteMany({});
    await resetCounter();
    console.log({ query });
    return res.status(205).send({ data: query });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error });
  }
};
