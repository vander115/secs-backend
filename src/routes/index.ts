import { Router } from 'express';
import { usersRoutes } from './UsersRoutes';
import { AuthenticateRoutes } from './AuthenticateRoutes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/session', AuthenticateRoutes);

export { routes };
