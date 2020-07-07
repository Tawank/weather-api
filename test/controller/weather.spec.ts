import { WeatherController } from '../../src/controller/weather';
import { WeatherService } from '../../src/service/weather';

describe('WeatherController', () => {
  let controller;

  beforeEach(() => {
    controller = new WeatherController(new WeatherService());
  });

  it('should get back all user', () => {
    expect(controller.getUsers()).toEqual(
      [{
        email: 'lorem@ipsum.com',
        name: 'Lorem'
      }, {
          email: 'doloe@sit.com',
          name: 'Dolor'
        }]
    );
  });

  it('should give back the right user', () => {
    expect(controller.getUser({
      params: {
        id: 'Lorem'
      }
    })).toEqual({
      email: 'lorem@ipsum.com',
      name: 'Lorem'
    });
  });

  it('should add a new user', () => {
    expect(controller.getUsers()).toHaveLength(2);
    expect(controller.newUser({
      body: {
        email: 'test@test.com',
        name: 'test'
      }
    })).toEqual({
      email: 'test@test.com',
      name: 'test'
    });
    expect(controller.getUsers()).toHaveLength(3);
  });

  it('should update a existing user', () => {
    expect(controller.updateUser({
      body: {
        email: 'changed@changed.com',
        name: 'Lorem'
      }, params: {
        id: 'Lorem'
      }
    })).toEqual({
      email: 'changed@changed.com',
      name: 'Lorem'
    });
  });

  it('should delete a user', () => {
    expect(controller.getUsers()).toHaveLength(2);
    expect(controller.deleteUser({
      params: {
        id: 'Lorem'
      }
    })).toEqual('Lorem');
    expect(controller.getUsers()).toHaveLength(1);
  });
});
