import { Request, Response } from 'express';
import UserModel from "../models/user.model.js"
import bcrypt from 'bcryptjs';
import { generateToken } from '../lib/utils.js';

export const signup = async (req: Request<{}, {}, { fullName: string, email: string, password: string }>, res: Response) => {
  const { fullName, email, password } = req.body;

  if (password.length < 6) {
    res.status(400).json({ message: "Pasword must be at least 6 characters" })
    return;
  }

  try {
    const user = await UserModel.findOne({ email })

    if (user) {
      res.status(400).json({ message: "User already exists" })
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      fullName,
      email,
      password: hashedPassword,
    })

    generateToken(newUser.id, res);
    await newUser.save();
    res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json({ message: "Internal error" })
  }
}
export const login = (req: Request, res: Response) => {
  res.send("signup login")
}
export const logout = (req: Request, res: Response) => {
  res.send("signup logout")
}