import countModel from "../models/countModel.js";
export const updateCounter = async (field) => {
    const updatedCount = await countModel.findOneAndUpdate({}, { $inc: { [field]: 1 } }, { new: true });
    console.log({ updatedCount });
    return updatedCount;
};
//# sourceMappingURL=updateCounter.js.map