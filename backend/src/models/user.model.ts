import mongoose, { InferRawDocType } from "mongoose";
import type { IUser } from "../lib/types/user.js";

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

const User = mongoose.model("User", userSchema);

export type TUserModel = InferRawDocType<IUser>;
export default User;