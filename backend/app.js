import express, { json } from 'express';
import { corsMiddleware } from './middleware/cors.js';
import { createRouter } from './routes/router.js';
import morgan from 'morgan';

export const createApp = () => {
  const app = express();
  // const publicDirection = express.static('./public');
  app.use(json());
  app.use(corsMiddleware());
  app.disable('x-powered-by');
  app.use(morgan());
  app.use('/', createRouter());

  return app;
};
