import express from 'express';
import routes from './routes';
import cors from 'cors';

import 'reflect-metadata';

import './database';

class AppController {
  public express: express.Application;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  routes() {
    this.express.use(routes);
  }
}

export default new AppController().express;
