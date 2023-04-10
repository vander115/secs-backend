import  { Router } from 'express';
import { helloWorldRoutes } from './HelloWorldRoutes';
import { usersRoutes } from './UsersRoutes';

const routes = Router();


routes.get('/hello-world', helloWorldRoutes);
routes.get('/users', usersRoutes);

export { routes };