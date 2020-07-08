import { WeatherService } from '../../src/service/weather';
import { AxiosMock } from '../axiosMock';

describe('WeatherService', () => {
  let service;

  beforeEach(() => {
    service = new WeatherService(new AxiosMock());
  });

  it('should get forecast', () => {
    return service.getForecast('Lodz, Poland').then(data => {
      expect(data).toHaveLength(3);
      expect(data[1].weather[0].main).toEqual('Clouds');
    });
  });

  it('should get climate forecast', () => {
    return service.getClimate('lodz').then(data => {
      expect(data).toHaveLength(3);
      expect(data[2].accumulated_rain).toEqual('46.2');
    });
  });

  it('should return error if location in forecast does not exist', () => {
    return service.getForecast('not exist').catch(e => {
      expect(e.message).toEqual('Location not found');
    });
  });

  it('should return error if location in climate forecast does not exist', () => {
    return service.getClimate('not exist').catch(e => {
      expect(e.message).toEqual('Location not found');
    });
  });
});
