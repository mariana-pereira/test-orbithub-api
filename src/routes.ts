import express from 'express';

import UserController from '@controllers/UserController';
import SessionController from '@controllers/SessionController';

const routes = express.Router();

routes.post('/session', SessionController.store);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

export default routes;