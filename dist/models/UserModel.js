import mongoose, { Schema } from 'mongoose';
const userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    role: {
        type: String,
    }
});
const UserModel = mongoose.model("User", userSchema);
export default UserModel;
//# sourceMappingURL=UserModel.js.map