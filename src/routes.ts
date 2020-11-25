import express from 'express';

import UserController from '@controllers/UserController';
import SessionController from '@controllers/SessionController';

import authMiddleware from './middlewares/authMiddleware';

const routes = express.Router();

routes.post('/session', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

export default routes;