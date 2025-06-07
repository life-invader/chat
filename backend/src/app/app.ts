import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import type { IAppProps, IAppRouter, IEnvCfg, MiddlewareEntry } from './types.js';

export class App {
  private app: Express;
  private cfg: IEnvCfg;
  private routers: IAppRouter[];
  private appMiddlewares: MiddlewareEntry[] = [
    {
      middleware: express.json,
      cfg: [],
    },
    {
      middleware: cookieParser,
      cfg: [],
    },
  ];

  constructor({ routers }: IAppProps) {
    this.routers = routers;
    this.app = express();
    this.cfg = this.initCfg();
    this.initAppMiddlewares()
    this.initAppRouters()
  }

  private initCfg() {
    return (dotenv.config() as IEnvCfg)
  }

  private initAppMiddlewares() {
    this.appMiddlewares.map(({ cfg, middleware }) => {
      this.app.use(middleware(...cfg));
    })
  }

  private initAppRouters() {
    this.routers.map(({ url, router }) => {
      this.app.use(url, router)
    })
  }

  private async connectDB() {
    try {
      await mongoose.connect(this.cfg.parsed.MONGO_DB_URI);

      console.debug("[App mongoose connect]: connected!")
    } catch (error) {
      console.error("[App mongoose connect]: connection failed!", error)
    }
  }

  start() {
    this.app.listen(this.cfg.parsed.PORT, () => {
      console.debug(`[App]: Server is running on http://localhost:${this.cfg.parsed.PORT}`);
      this.connectDB();
    });
  }
}