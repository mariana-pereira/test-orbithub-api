import express from 'express';

import UserController from '@controllers/UserController';

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:id', UserController.show);

export default routes;