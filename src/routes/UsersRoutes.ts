import { Router } from 'express';
import { UsersController } from '../controllers/UsersController';
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';

const usersRoutes = Router();

const controller = new UsersController();

usersRoutes.get('/list', controller.list);
usersRoutes.get('/show/:id', controller.show);

usersRoutes.post('/', controller.create);

usersRoutes.delete('/:id', ensureAuthenticate, controller.delete);

usersRoutes.put('/:id', controller.update);

export { usersRoutes };
