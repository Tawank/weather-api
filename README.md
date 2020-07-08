# Weather API

## General information

This API is using 3 other APIs to fetch informations about weather.
Open Weather Map - general informations
ClimaCell - precipitation
climate data - to get climate info about this year

## Project setup
```
yarn install
```

### Starts server
```
yarn run start
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run tslint
```

## Used Middleware

| Middleware                                              | Reason                                                                                                   |
|---------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [body-parser](https://github.com/expressjs/body-parser) | We need to access the body of a request                                                                  |
| [helmet](https://github.com/helmetjs/helmet)            | Adds some protection to the application and removes things like the `X-Powered-By header` from a request |
| [axios](https://github.com/axios/axios)                 | We need to fetch data from weather api                                                                   |

## Endpoints

| Method | Endpoint                                | Reason                                                                            |
|--------|-----------------------------------------|-----------------------------------------------------------------------------------|
| GET    | /weather/forecast?location=Lodz, Poland | Get forecast for given location (fetched from "Open Weather Map" and "ClimaCell") |
| GET    | /weather/climate?location=Lodz          | Get climate info about this year                                                  |
