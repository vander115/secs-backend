import { Router } from 'express';
import { AuthenticateController } from '../controllers/AuthenticateController';

const AuthenticateRoutes = Router();

const controller = new AuthenticateController();

// AuthenticateRoutes.get('/list', controller.list);
// AuthenticateRoutes.get('/show/:id', controller.show);

AuthenticateRoutes.post('/', controller.create);

// AuthenticateRoutes.delete('/:id', controller.delete);

// AuthenticateRoutes.put('/:id', controller.update);

export { AuthenticateRoutes };
