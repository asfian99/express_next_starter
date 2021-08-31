import express from 'express';
import { Request, Response } from 'express';

const PORT = process.env.PORT || 4000;

const server = async () => {
  const app = express();

  app.use(express.json());

  app.get('/', (_req: Request, res: Response) => {
    // console.log(req);

    res.json({ msg: 'hello world' });
  });

  app.listen(PORT, () => console.log(`server running on localhost:${PORT}`));
};

server();
