import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRouter from "./routes/auth.route.js";
import { connectDB } from './lib/db.js';

interface IEnvCfg {
  parsed: {
    MONGO_DB_URI: string
    PORT: string
    JWT_SECRET: string
  }
}

const app: Express = express();
const { parsed } = dotenv.config() as IEnvCfg;

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routers
app.use("/api/auth", authRouter)

// Start
app.listen(parsed.PORT, () => {
  console.log(`Server is running on http://localhost:${parsed.PORT}`);
  connectDB();
});