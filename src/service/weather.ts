import { provide } from 'inversify-binding-decorators';
import { inject } from 'inversify';

import { AxiosClient } from '../utils/axios';
import { AxiosRequestConfig } from 'axios';

import TYPES from '../constant/types';

export interface IWeatherForecast {
  time: string;
  precipitation: string;
  precipitation_type: string;
  main: object;
  weather: object;
  clouds: object;
  wind: object;
  sys: object;
}

export interface IWeatherClimate {
  month: string;
  tmax: string;
  temp: string;
  tmin: string;
  accumulated_rain: string;
  days_with_rain: string;
  sun_hours: string;
  rh: string;
}

@provide(TYPES.WeatherService)
export class WeatherService {

  constructor (
    @inject(TYPES.AxiosClient) private axiosClient: AxiosClient
  ) {
    this.axiosClient = axiosClient;
  }

  public async getForecast (location: string): Promise<IWeatherForecast[]> {
    const openWeatherMap = await this.fetchForecast('open-weather-map', { location });
    if (!openWeatherMap || openWeatherMap.message === 'city not found') {
      throw new Error('Location not found');
    }
    const openWeatherMapDays: any[] = openWeatherMap.list;
    const coord: object = openWeatherMap.city.coord;

    const climacellMicroweather: any[] = await this.fetchForecast('climacell-microweather', { coord });
    const climacellMicroweatherSearch: string[] = climacellMicroweather.map((x: any) => new Date(x.observation_time.value).toISOString().replace('T', ' ').substring(0, 19));

    const forecast: IWeatherForecast[] = [];
    for (const day of openWeatherMapDays) {
      const indexOfPrecipitation = climacellMicroweatherSearch.indexOf(day.dt_txt);
      let precipitation: string = '';
      // tslint:disable-next-line:variable-name
      let precipitation_type: string = '';
      if (indexOfPrecipitation !== -1) {
        precipitation = climacellMicroweather[indexOfPrecipitation].precipitation;
        precipitation_type = climacellMicroweather[indexOfPrecipitation].precipitation_type.value;
      }

      forecast.push({
        time: day.dt_txt,
        precipitation,
        precipitation_type,
        main: day.main,
        weather: day.weather,
        clouds: day.clouds,
        wind: day.wind,
        sys: day.sys
      });
    }

    return forecast;
  }

  public async getClimate (location: string): Promise<IWeatherClimate[]> {
    const baseURL = 'https://climate-data.p.rapidapi.com/';
    const url = `/api/getlocation?CITY=${location}`;
    const headers = {
      'x-rapidapi-host': 'climate-data.p.rapidapi.com',
      'x-rapidapi-key': process.env.RAPIDAPI_KEY
    };

    const config: AxiosRequestConfig = this.axiosClient.getConfig(
      baseURL,
      url,
      headers
    );
    const fetchLocation = await this.axiosClient.get(config).then(res => res.data);

    if (!fetchLocation || fetchLocation.location.length === 0) {
      throw new Error('Location not found');
    }

    const forecast = await this.fetchForecast('climate-data', { wmo: fetchLocation.location[0].wmo }).then(res => res.ClimateDataMonth);

    return forecast;
  }

  private async fetchForecast (provider: string, options: {
    location?: string,
    coord?: any,
    wmo?: string
  }): Promise<any> {
    let baseURL: string;
    let url: string;
    let headers: object;
    if (provider === 'open-weather-map') {
      baseURL = 'https://community-open-weather-map.p.rapidapi.com/';
      url = `/forecast?units=metric&q=${options.location}`;
      headers = {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': process.env.RAPIDAPI_KEY
      };
    } else if (provider === 'climacell-microweather') {
      baseURL = 'https://climacell-microweather-v1.p.rapidapi.com/';
      url = `/weather/forecast/hourly?lat=${options.coord.lat}&lon=${options.coord.lon}`;
      headers = {
        'x-rapidapi-host': 'climacell-microweather-v1.p.rapidapi.com',
        'x-rapidapi-key': process.env.RAPIDAPI_KEY
      };
    } else if (provider === 'climate-data') {
      baseURL = 'https://climate-data.p.rapidapi.com/';
      url = `/api/getclimatedata?KEY=${options.wmo}`;
      headers = {
        'x-rapidapi-host': 'climate-data.p.rapidapi.com',
        'x-rapidapi-key': process.env.RAPIDAPI_KEY
      };
    }

    const config: AxiosRequestConfig = this.axiosClient.getConfig(
      baseURL,
      url,
      headers
    );
    return this.axiosClient.get(config).then(res => res.data);
  }
}
