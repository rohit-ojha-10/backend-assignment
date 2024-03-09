import { getCounter } from "../functions/getCounter.js";
import { resetCounter } from "../functions/resetCounter.js";
import { updateCounter } from "../functions/updateCounter.js";
import UserModel from "../models/UserModel.js";
export const addUser = async (req, res) => {
    try {
        const userData = req.body;
        const newUser = new UserModel({
            ...userData,
        });
        await newUser.save();
        await updateCounter("additions");
        return res.status(202).send({ data: newUser });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ error });
    }
};
export const getUser = async (req, res) => {
    try {
        const { name } = req.query;
        const query = await UserModel.findOne({ name });
        console.log({ query });
        return res.status(200).send({ data: query });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ error });
    }
};
export const updateUser = async (req, res) => {
    try {
        const { name, email, role } = req.body;
        const updatedUser = await UserModel.findOneAndUpdate({ name }, { $set: { name, email, role } }, { new: true });
        await updateCounter("updations");
        console.log({ updatedUser });
        return res.status(200).send({ data: updatedUser });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ error });
    }
};
export const getCount = async (_req, res) => {
    try {
        const data = await getCounter();
        return res.status(202).send({ data });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ error });
    }
};
export const deleteUser = async (req, res) => {
    try {
        const { name } = req.query;
        const query = await UserModel.deleteOne({ name });
        await updateCounter("deletions");
        console.log({ query });
        return res.status(204).send({ data: query });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ error });
    }
};
export const reset = async (_req, res) => {
    try {
        const query = await UserModel.deleteMany({});
        await resetCounter();
        console.log({ query });
        return res.status(205).send({ data: query });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ error });
    }
};
//# sourceMappingURL=user.controller.js.map