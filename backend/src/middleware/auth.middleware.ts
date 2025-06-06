import { Request, Response, NextFunction } from 'express';
import jsonwebtoken from "jsonwebtoken"
import UserModel from "../models/user.model.js"

export const protectRoute = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    res
      .status(401)
      .json({ message: "Unauthorized" });

    return;
  }

  const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET as string)
  console.log(decoded)

  if (!decoded) {
    res
      .status(401)
      .json({ message: "Invalid token" });

    return;
  }

  const user = await UserModel.findById(decoded.userId).select("-password")

  if (!user) {
    res
      .status(404)
      .json({ message: "User not found" });

    return;
  }

  req.user = user;
  next()
}