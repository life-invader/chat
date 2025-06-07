import mongoose, { InferRawDocType } from "mongoose";
import { IUser } from "../../lib/types/user.js";

const userSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  avatar: {
    type: String,
    default: "",
  },
},
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", userSchema);

export type TUserModel = InferRawDocType<IUser>;
export default UserModel;