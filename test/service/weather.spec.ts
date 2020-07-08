import { WeatherService } from '../../src/service/weather';
import { AxiosMock } from '../axiosMock';

describe('WeatherService', () => {
  let service;

  beforeEach(() => {
    service = new WeatherService(new AxiosMock());
  });

  it('should get forecast', () => {
    expect(service.getForecast('Lodz, Poland')).toEqual(
      [{
        email: 'lorem@ipsum.com',
        name: 'Lorem'
      },
      {
        email: 'doloe@sit.com',
        name: 'Dolor'
      }]
    );
  });
});
