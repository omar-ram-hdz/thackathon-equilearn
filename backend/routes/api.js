import { Router } from 'express';
import { UserController } from '../controllers/user_controller.js';
import { CourseController } from '../controllers/course_controller.js';
import { ContentController } from '../controllers/content_controller.js';
import { TopicModel } from '../models/topic_model.js';
import { SubTopicModel } from '../models/subtopic_model.js';
import { UserModel } from '../models/user_model.js';
import { CourseModel } from '../models/course_model.js';

export const createAPIRouter = () => {
  const api = Router();
  const userController = new UserController(UserModel);
  const courseController = new CourseController(CourseModel);
  const contentController = new ContentController(TopicModel, SubTopicModel);
  // User endpoints
  api.post('/user', userController.create);
  api.get('/user/:id', userController.getById);
  api.get('/user/:email/:pass', userController.get);

  // Course endpoints
  api.get('/courses/:grade', courseController.getAll);
  api.get('/course/:id', courseController.get);
  api.get('/course/:id/content', contentController.get);
  api.get('/course/:id/content-partial', contentController.getPartial);
  api.get('/lesson/:id', contentController.getLesson);
  return api;
};
