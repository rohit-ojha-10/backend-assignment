import mongoose, { Schema } from 'mongoose';
import { IUser } from '../types/models.types.js';

const userSchema: Schema<IUser> = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  role:{
    type: String,
  } 
});

const UserModel = mongoose.model<IUser>("User", userSchema);

export default UserModel;
