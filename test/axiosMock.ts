import { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { getFakeResponse } from './testUtils';

export class AxiosMock {

  public get (config) {
    return this.doRequest('get', config);
  }

  public post (config) {
    return this.doRequest('post', config);
  }

  public getConfig (
    baseURL: string,
    url: string,
    headers?: {},
    data?: {} | string
  ): AxiosRequestConfig {
    const config: AxiosRequestConfig = {
      baseURL,
      url,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        ...headers
      },
      data: data ? data : undefined
    };

    return config;
  }

  public doRequest (
    method: Method,
    config: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    config = { ...config, method };
    return Promise.resolve({
      data: getFakeResponse(config.baseURL, config.url)
    } as AxiosResponse);
  }
}
