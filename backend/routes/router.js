import { Router } from 'express';
import { createAPIRouter } from './api.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createRouter = () => {
  const mainRouter = Router();

  mainRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.min.html'));
  });

  mainRouter.use('/api', createAPIRouter());

  return mainRouter;
};
