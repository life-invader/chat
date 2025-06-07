import mongoose, { InferRawDocType, Document } from "mongoose";
import type { IUser } from "../../lib/types/user.js";

const userSchema = new mongoose.Schema<IUser>(
  {
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
    toJSON: {
      versionKey: false,
      transform: (_doc, ret) => {
        ret.id = ret._id.toString();
        delete ret._id;
        return ret;
      },
    },
  }
);

export const UserModel = mongoose.model<IUser>("User", userSchema);
export type UserModelType = InferRawDocType<IUser & Document>;