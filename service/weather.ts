import { injectable } from 'inversify';

export interface IWeather {
  email: string;
  name: string;
}

@injectable()
export class WeatherService {

  private userStorage: IWeather[] = [{
    email: 'lorem@ipsum.com',
    name: 'Lorem'
  }, {
    email: 'doloe@sit.com',
    name: 'Dolor'
  }];

  public getUsers(): IWeather[] {
    return this.userStorage;
  }

  public getUser(id: string): IWeather {
    let result: IWeather;
    this.userStorage.map(user => {
      if (user.name === id) {
        result = user;
      }
    });

    return result;
  }

  public newUser(user: IWeather): IWeather {
    this.userStorage.push(user);
    return user;
  }

  public updateUser(id: string, user: IWeather): IWeather {
    this.userStorage.map((entry, index) => {
      if (entry.name === id) {
        this.userStorage[index] = user;
      }
    });

    return user;
  }

  public deleteUser(id: string): string {
    const updatedUser: IWeather[] = [];
    this.userStorage.map(user => {
      if (user.name !== id) {
        updatedUser.push(user);
      }
    });

    this.userStorage = updatedUser;
    return id;
  }
}
