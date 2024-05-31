import { Router } from 'express';
import { UserController } from '../controllers/user_controller.js';
import { CourseController } from '../controllers/course_controller.js';
import { UserModel } from '../models/user_model.js';
import { CourseModel } from '../models/course_model.js';

export const createAPIRouter = () => {
  const api = Router();
  const userController = new UserController(UserModel);
  const courseController = new CourseController(CourseModel);
  // User endpoints
  api.post('/user', userController.create);
  api.get('/user/:id', userController.getById);
  api.get('/user/:email/:pass', userController.get);

  // Course endpoints
  api.get('/courses', courseController.getAll);
  api.get('/course/:id', courseController.get);
  return api;
};
