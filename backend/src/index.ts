import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
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
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/auth", authRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express + TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${parsed.PORT}`);
  connectDB();
});