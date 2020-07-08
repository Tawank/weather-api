export function getFakeResponse (baseURL: string, url: string) {
  // https://climacell-microweather-v1.p.rapidapi.com/weather/forecast/hourly?lat=51.75&lon=19.4667
  if (
    baseURL === 'https://climacell-microweather-v1.p.rapidapi.com/' &&
    url === '/weather/forecast/hourly?lat=51.75&lon=19.4667'
  ) {
    return [
      {
        'lat': 51.75,
        'lon': 19.4667,
        'precipitation': {
          'value': 0,
          'units': 'mm/hr'
        },
        'precipitation_type': {
          'value': 'none'
        },
        'observation_time': {
          'value': '2020-07-07T22:00:00.000Z'
        }
      },
      {
        'lat': 51.75,
        'lon': 19.4667,
        'precipitation': {
          'value': 0,
          'units': 'mm/hr'
        },
        'precipitation_type': {
          'value': 'none'
        },
        'observation_time': {
          'value': '2020-07-07T23:00:00.000Z'
        }
      },
      {
        'lat': 51.75,
        'lon': 19.4667,
        'precipitation': {
          'value': 0,
          'units': 'mm/hr'
        },
        'precipitation_type': {
          'value': 'none'
        },
        'observation_time': {
          'value': '2020-07-08T00:00:00.000Z'
        }
      }
    ];
  }

  // https://community-open-weather-map.p.rapidapi.com/forecast?units=metric&q=Lodz, Poland
  if (
    baseURL === 'https://community-open-weather-map.p.rapidapi.com/' &&
    url === '/forecast?units=metric&q=Lodz, Poland'
  ) {
    return {
      'cod': '200',
      'message': 0,
      'cnt': 40,
      'list': [
        {
          'dt': 1594166400,
          'main': {
            'temp': 11.04,
            'feels_like': 8.03,
            'temp_min': 11.04,
            'temp_max': 12.21,
            'pressure': 1016,
            'sea_level': 1016,
            'grnd_level': 993,
            'humidity': 73,
            'temp_kf': -1.17
          },
          'weather': [
            {
              'id': 801,
              'main': 'Clouds',
              'description': 'few clouds',
              'icon': '02n'
            }
          ],
          'clouds': {
            'all': 12
          },
          'wind': {
            'speed': 3.11,
            'deg': 208
          },
          'sys': {
            'pod': 'n'
          },
          'dt_txt': '2020-07-08 00:00:00'
        },
        {
          'dt': 1594177200,
          'main': {
            'temp': 12.01,
            'feels_like': 8.2,
            'temp_min': 12.01,
            'temp_max': 12.59,
            'pressure': 1015,
            'sea_level': 1015,
            'grnd_level': 992,
            'humidity': 71,
            'temp_kf': -0.58
          },
          'weather': [
            {
              'id': 803,
              'main': 'Clouds',
              'description': 'broken clouds',
              'icon': '04d'
            }
          ],
          'clouds': {
            'all': 76
          },
          'wind': {
            'speed': 4.42,
            'deg': 210
          },
          'sys': {
            'pod': 'd'
          },
          'dt_txt': '2020-07-08 03:00:00'
        },
        {
          'dt': 1594188000,
          'main': {
            'temp': 12.88,
            'feels_like': 9.25,
            'temp_min': 12.88,
            'temp_max': 13.08,
            'pressure': 1014,
            'sea_level': 1014,
            'grnd_level': 991,
            'humidity': 76,
            'temp_kf': -0.2
          },
          'weather': [
            {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10d'
            }
          ],
          'clouds': {
            'all': 92
          },
          'wind': {
            'speed': 4.79,
            'deg': 274
          },
          'rain': {
            '3h': 0.2
          },
          'sys': {
            'pod': 'd'
          },
          'dt_txt': '2020-07-08 06:00:00'
        }
      ],
      'city': {
        'id': 3093133,
        'name': 'Łódź',
        'coord': {
          'lat': 51.75,
          'lon': 19.4667
        },
        'country': 'PL',
        'population': 768755,
        'timezone': 7200,
        'sunrise': 1594089176,
        'sunset': 1594148452
      }
    };
  }

  // https://climate-data.p.rapidapi.com/api/getlocation?CITY=lodz
  if (
    baseURL === 'https://climate-data.p.rapidapi.com/' &&
    url === '/api/getlocation?CITY=lodz'
  ) {
    return {
      'title': 'WeatherOnline Searchresult',
      'link': 'https://www.weatheronline.co.uk/',
      'modified': '2020-07-08T04:27:43Z',
      'description': '',
      'generator': 'https://www.weatheronline.co.uk',
      'location': [
        {
          'wmo': '12465',
          'city': 'Łódź',
          'country': 'PL',
          'country_name': 'Poland'
        }
      ]
    };
  }

  // https://climate-data.p.rapidapi.com/api/getclimatedata?KEY=12465
  if (
    baseURL === 'https://climate-data.p.rapidapi.com/' &&
    url === '/api/getclimatedata?KEY=12465'
  ) {
    return {
      'title': 'WeatherOnline Climate',
      'link': 'https://www.weatheronline.co.uk/Poland/&#321;&oacute;d&#378;.htm',
      'modified': '2020-07-08T04:42:35Z',
      'description': '',
      'generator': 'https://www.weatheronline.co.uk',
      'location': {
        'city': '&#321;&oacute;d&#378;',
        'country': 'PL',
        'country_name': 'Poland',
        'tz_long': 'Europe/Warsaw',
        'lat': '51.7333',
        'lon': '19.4',
        'SI': 'kph',
        'SIU': 'mm',
        'CEL': 'C',
        'start_date': 'Wed Jul  1 04:42:35 2020',
        'end_date': 'Tue Jul  7 04:42:35 2020'
      },
      'ClimateDataMonth': [
        {
          'tmax': '0.9',
          'temp': '-1.3',
          'tmin': '-3.9',
          'accumulated_rain': '39.7',
          'days_with_rain': '10',
          'sun_hours': '9',
          'rh': '86',
          'TIME': 'January'
        },
        {
          'tmax': '2.6',
          'temp': '-0.1',
          'tmin': '-3.5',
          'accumulated_rain': '36.0',
          'days_with_rain': '9',
          'sun_hours': '10',
          'rh': '83',
          'TIME': 'February'
        },
        {
          'tmax': '7.0',
          'temp': '3.3',
          'tmin': '-1.0',
          'accumulated_rain': '46.2',
          'days_with_rain': '10',
          'sun_hours': '12',
          'rh': '76',
          'TIME': 'March'
        }
      ]
    };
  }
}
