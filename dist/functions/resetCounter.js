import countModel from "../models/countModel.js";
export const resetCounter = async () => {
    const count = await countModel.updateOne({}, { $set: { additions: 0, updations: 0, deletions: 0 } });
    return count;
};
//# sourceMappingURL=resetCounter.js.map