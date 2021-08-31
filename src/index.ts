import express from 'express';
import { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT;

const server = async () => {
  const app = express();

  app.use(express.json());

  app.get('/', (_req: Request, res: Response) => {
    res.json({ msg: 'hello world' });
  });

  app.listen(PORT, () => console.log(`server running on localhost:${PORT}`));
};

server();
