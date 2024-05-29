import { Router } from 'express';
import { UserController } from '../controllers/user_controller.js';
import { UserModel } from '../models/user_model.js';

export const createAPIRouter = () => {
  const api = Router();
  const userController = new UserController(UserModel);
  // User endpoints
  api.post('/user', userController.create);
  api.get('/user/:id', userController.getById);
  api.get('/user/:email/:pass', userController.get);

  return api;
};
