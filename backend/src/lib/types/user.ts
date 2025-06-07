import mongoose from "mongoose";

export interface IUser {
  email: string;
  fullName: string;
  password: string;
  avatar: string;
}

export interface IMessage {
  senderId: mongoose.Schema.Types.ObjectId;
  receiverId: mongoose.Schema.Types.ObjectId;
  text: string;
  image: string;
}