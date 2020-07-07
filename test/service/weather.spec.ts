import { WeatherService } from '../../service/weather';

describe('WeatherService', () => {
  let service;

  beforeEach(() => {
    service = new WeatherService();
  });

  it('should get back all user', () => {
    expect(service.getUsers()).toEqual(
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
    expect(service.getUser('Lorem')).toEqual({
      email: 'lorem@ipsum.com',
      name: 'Lorem'
    });
  });

  it('should add a new user', () => {
    expect(service.getUsers()).toHaveLength(2);
    expect(service.newUser({
      email: 'test@test.com',
      name: 'test'
    })).toEqual({
      email: 'test@test.com',
      name: 'test'
    });
    expect(service.getUsers()).toHaveLength(3);
  });

  it('should update a existing user', () => {
    expect(service.updateUser('Lorem', {
      email: 'changed@changed.com',
      name: 'Lorem'
    })).toEqual({
      email: 'changed@changed.com',
      name: 'Lorem'
    });
  });

  it('should delete a user', () => {
    expect(service.getUsers()).toHaveLength(2);
    expect(service.deleteUser('Lorem')).toEqual('Lorem');
    expect(service.getUsers()).toHaveLength(1);
  });
});
