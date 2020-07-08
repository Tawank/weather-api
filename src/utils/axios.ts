import { provide } from 'inversify-binding-decorators';
import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import TYPES from '../constant/types';

@provide(TYPES.AxiosClient)
export class AxiosClient {
  public get (config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.doRequest('get', config);
  }

  public post (config: AxiosRequestConfig): Promise<AxiosResponse> {
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

  private doRequest (
    method: Method,
    config: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    config = { ...config, method };

    try {
      return axios.request(config);
    } catch (error) {
      throw error;
    }
  }
}
