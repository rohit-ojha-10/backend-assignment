import countModel from "../models/countModel.js";
import { Counter } from "../types/models.types.js";

export const updateCounter = async (field:keyof Counter) => {
  const updatedCount = await countModel.findOneAndUpdate(
    {},
    { $inc: { [field]: 1 } },
    { new: true }
  );
  console.log({ updatedCount });
  return updatedCount;
};
