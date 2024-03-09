import cors from 'cors';
import express from 'express';

const expressConfig = (): express.Application => {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());

  return app;
};

export default expressConfig;
