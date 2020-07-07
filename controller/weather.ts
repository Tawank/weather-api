import {
  controller, httpGet, httpPost, httpPut, httpDelete
} from 'inversify-express-utils';
import { inject } from 'inversify';
import { IWeather, WeatherService } from '../service/weather';
import { Request } from 'express';
import TYPES from '../constant/types';

@controller('/user')
export class WeatherController {

  constructor(@inject(TYPES.WeatherService) private weatherService: WeatherService) { }

  @httpGet('/')
  public getUsers(): IWeather[] {
    return this.weatherService.getUsers();
  }

  @httpGet('/:id')
  public getUser(request: Request): IWeather {
    return this.weatherService.getUser(request.params.id);
  }

  @httpPost('/')
  public newUser(request: Request): IWeather {
    return this.weatherService.newUser(request.body);
  }

  @httpPut('/:id')
  public updateUser(request: Request): IWeather {
    return this.weatherService.updateUser(request.params.id, request.body);
  }

  @httpDelete('/:id')
  public deleteUser(request: Request): string {
    return this.weatherService.deleteUser(request.params.id);
  }
}
