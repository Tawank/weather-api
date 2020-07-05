import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as helmet from 'helmet';
import TYPES from './constant/types';
import { WeatherService } from './service/weather';
import './controller/home';
import './controller/weather';

// load everything needed to the Container
const container = new Container();
container.bind<WeatherService>(TYPES.WeatherService).to(WeatherService);

// start the server
const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(helmet());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(cors());
  app.use(bodyParser.json());
});

const serverInstance = server.build();
serverInstance.listen(3000);

console.log('Server started on port 3000');
