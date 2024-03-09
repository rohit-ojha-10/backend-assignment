import countModel from "../models/countModel.js";
export const getCounter = async () => {
    const count = await countModel.find({});
    console.log({ count });
    return count[0];
};
//# sourceMappingURL=getCounter.js.map