import {
  controller, httpGet
} from 'inversify-express-utils';
import { inject } from 'inversify';

import { IWeatherForecast, IWeatherClimate, WeatherService } from '../service/weather';
import { Request } from 'express';

import TYPES from '../constant/types';

@controller('/weather')
export class WeatherController {

  constructor (@inject(TYPES.WeatherService) private weatherService: WeatherService) { }

  @httpGet('/forecast')
  public getForecast (request: Request): Promise<IWeatherForecast[]> {
    return this.weatherService.getForecast(`${request.query.location}`);
  }

  @httpGet('/climate')
  public getClimate (request: Request): Promise<IWeatherClimate[]> {
    return this.weatherService.getClimate(`${request.query.location}`);
  }
}
