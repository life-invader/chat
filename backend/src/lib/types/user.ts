import type { Types } from "mongoose";

export interface IUser {
  email: string;
  fullName: string;
  password: string;
  avatar: string;
}

export interface IMessage {
  senderId: Types.ObjectId;
  receiverId: Types.ObjectId;
  text: string;
  image: string;
}