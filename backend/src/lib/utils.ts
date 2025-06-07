import { Response } from 'express';
import jwt from 'jsonwebtoken'

export const generateToken = (userId: string, res: Response) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET as string, { expiresIn: "7d" });
  res.cookie("token", token, {
    sameSite: true,
    path: "api/auth",
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    secure: process.env.NODE__ENV === 'development' ? false : true,
  })

  return token;
}