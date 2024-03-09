import mongoose, { Schema } from "mongoose";
const countSchema = new Schema({
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
const countModel = mongoose.model("count", countSchema, "count");
export default countModel;
//# sourceMappingURL=countModel.js.map