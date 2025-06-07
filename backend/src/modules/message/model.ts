import mongoose, { InferRawDocType } from "mongoose";
import { IMessage } from "../../lib/types/user.js";

const messageSchema = new mongoose.Schema<IMessage>({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  text: {
    type: String,
  },
  image: {
    type: String,
  },
},
  {
    timestamps: true,
  }
);

export const MessageModel = mongoose.model("Message", messageSchema);
export type TUserModel = InferRawDocType<IMessage>;