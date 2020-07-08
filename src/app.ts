import * as dotenv from 'dotenv';
dotenv.config();

import 'reflect-metadata';
import * as express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as cors from 'cors';
import * as helmet from 'helmet';

// load all injectable entities.
// the @provide() annotation will then automatically register them.
import TYPES from './constant/types';
import { WeatherService } from './service/weather';
import { AxiosClient } from './utils/axios';
import { Container } from 'inversify';
import './ioc/loader';

// load everything needed to the Container
const container = new Container();
container.bind<WeatherService>(TYPES.WeatherService).to(WeatherService);
container.bind<AxiosClient>(TYPES.AxiosClient).to(AxiosClient);

// start the server
const server = new InversifyExpressServer(container);

function errorHandler (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) {
  res.status(500).json({ message: err.message });
}

server.setConfig((app) => {
  app.use(helmet());
  app.use(express.urlencoded({
    extended: true
  }));
  app.use(express.json());
  app.use(cors());
});

const serverInstance = server.build();
serverInstance.listen(3000);

serverInstance.use(errorHandler);

// tslint:disable-next-line:no-console
console.log('Server started on port 3000');
