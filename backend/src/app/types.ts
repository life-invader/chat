import express, { RequestHandler } from 'express';

export interface IAppRouter {
  url: string;
  router: RequestHandler;
}

export interface IAppProps {
  routers: IAppRouter[]
}

export interface IEnvCfg {
  parsed: {
    MONGO_DB_URI: string
    PORT: string
    JWT_SECRET: string
  }
}

export interface MiddlewareEntry<T = any> {
  middleware: (...params: T[]) => express.RequestHandler;
  cfg: T[];
};