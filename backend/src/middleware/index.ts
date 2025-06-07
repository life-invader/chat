import { Request, Response, NextFunction } from 'express';
import jsonwebtoken, { type JwtPayload } from "jsonwebtoken"
import { UserModel } from '../modules/user/index.js';
import type { IToken } from '../lib/types/common.js';

export const protectedRoute = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    res
      .status(401)
      .json({ message: "Unauthorized" });

    return;
  }

  const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET as string) as JwtPayload & IToken;

  if (!decoded) {
    res
      .status(401)
      .json({ message: "Invalid token" });

    return;
  }

  const user = await UserModel
    .findById(decoded.userId)
    .select({ password: 0, });

  if (!user) {
    res
      .status(404)
      .json({ message: "User not found" });

    return;
  }

  console.log(user);
  res.locals.user = user;
  next();
}