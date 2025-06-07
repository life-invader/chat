import express, { Request, Response, Router } from 'express';
import { protectedRoute } from '../../middleware/index.js';
import { UserModel, UserModelType } from '../user/model.js';
import { MessageModel } from './model.js';
import { v2 as cloudinary } from 'cloudinary'
import type { IRouteList } from './types.js';


export class MessageRouter {
  router: Router;
  private routes: IRouteList[] = [
    {
      httpMethod: "get",
      url: "/users",
      handlers: [protectedRoute, this.getUsersForSidebar],
    },
    {
      httpMethod: "get",
      url: "/:id",
      handlers: [protectedRoute, this.getMessages],
    },
    {
      httpMethod: "post",
      url: "/send/:id",
      handlers: [protectedRoute, this.sendMessage],
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

  private async getUsersForSidebar(req: Request, res: Response<{}, { user: UserModelType }>) {
    try {
      const loggedInUserId = res.locals.user.id;
      const allUsers = await UserModel
        .find({ _id: { $ne: loggedInUserId } })
        .select({ password: 0 })

      res.status(200).json(allUsers)
    } catch (error) {
      res.status(500).json({ message: "Internal server error" })
    }
  }

  private async getMessages(req: Request<{ id: string }>, res: Response<{}, { user: UserModelType }>) {
    try {
      const { id: companionId } = req.params; // С кем чат
      const myId = res.locals.user.id; // Я
      const messages = await MessageModel.find({
        $or: [
          { senderId: myId, receiverId: companionId },
          { senderId: companionId, receiverId: myId },
        ]
      });

      res.status(200).json(messages)
    } catch (error) {
      res.status(500).json({ message: "Internal server error" })
    }
  }

  private async sendMessage(req: Request<{ id: string }, {}, { text: string, image: string }>, res: Response<{}, { user: UserModelType }>) {
    try {
      const { image, text } = req.body;
      const { id: receiverId } = req.params;
      const senderId = res.locals.user.id; // Я

      if (image) {
        const response = await cloudinary.uploader.upload(image);
        const avatarUrl = response.secure_url;
      }

      const newMessage = new MessageModel({
        senderId,
        receiverId,
        text,
        image,
      });

      // todo socket io

      await newMessage.save()
      res.status(201).json(newMessage)
    } catch (error) {
      res.status(500).json({ message: "Internal server error" })
    }
  }
}