import  { Router } from 'express';
import { UsersController } from '../controllers/UsersController';

const usersRoutes = Router();

const controller = new UsersController();

usersRoutes.get('/', controller.show);

export { usersRoutes  };