import express, { Request, Response, Router } from 'express';
import bcrypt from 'bcryptjs';
import { UserModel, UserModelType } from './model.js';
import { protectedRoute } from '../../middleware/index.js';
import { generateToken } from '../../lib/utils.js';
import { cloudinaryApi } from '../../lib/cloudinary.js';
import type { IRouteList } from './types.js';

export class UserRouter {
  router: Router;
  private routes: IRouteList[] = [
    {
      httpMethod: "post",
      url: "/signup",
      handlers: [this.signup],
    },
    {
      httpMethod: "post",
      url: "/login",
      handlers: [this.login],
    },
    {
      httpMethod: "post",
      url: "/logout",
      handlers: [this.logout],
    },
    {
      httpMethod: "get",
      url: "/checkAuth",
      handlers: [protectedRoute, this.checkAuth],
    },
    {
      httpMethod: "put",
      url: "/update",
      handlers: [protectedRoute, this.updateProfile],
    },
  ];

  constructor() {
    this.router = express.Router();
    this.initRoutes();
  }

  private initRoutes() {
    this.routes.map(({ httpMethod, url, handlers }) => {
      this.router[httpMethod](url, ...handlers);
    })
  }

  private async signup(req: Request<{}, {}, { fullName: string, email: string, password: string }>, res: Response) {
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

  private async login(req: Request<{}, {}, { email: string, password: string }>, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await UserModel.findOne({ email });

      if (!user) {
        res.status(400).json({ message: "Invalid credentials" })
        return;
      }

      const isPasswordCorrect = await bcrypt.compare(password, user.password)

      if (!isPasswordCorrect) {
        res.status(400).json({ message: "Invalid credentials" })
        return;
      }

      generateToken(user.id, res);
      res.status(200).json({ message: "success", user })
    } catch (error) {
      res.status(500).json({ message: "Internal error" })
    }
  }

  private async logout(_req: Request, res: Response) {
    try {
      res.clearCookie("token");
      res.status(200).json({ message: "success" })
    } catch (error) {
      res.status(500).json({ message: "Internal error" })
    }
  }

  private async checkAuth(_req: Request, res: Response<{}, { user: UserModelType }>) {
    res.status(200).json(res.locals.user)
  }

  private async updateProfile(req: Request<{}, {}, { avatar: string }>, res: Response<{}, { user: UserModelType }>) {
    try {
      const { avatar } = req.body;
      const id = res.locals.user.id;

      if (!avatar) {
        res.status(400).json({ message: "No avatar provided" })
        return;
      }

      await cloudinaryApi.uploader.upload(avatar)
      const upadtedUser = UserModel.findByIdAndUpdate(id, { avatar: avatar }, { new: true });
      res.status(200).json({ user: upadtedUser })
    } catch (error) {
      res.status(500).json({ message: "Internal error" })
    }
  }

}