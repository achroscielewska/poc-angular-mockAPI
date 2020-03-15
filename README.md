# MockAPI

## Libraries
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

- [json-server](https://www.npmjs.com/package/json-server)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## API

Run `npm run api` to start the mock API.
Navigate to `http://localhost:3000/`.

### API config

1. `api/db.sjon` - this is mock of db
2. `api/routes.json` - this is route mapping file
3. in `package.json` script to start server ` "api": "json-server api/db.json --routes api/routes.json --no-cors=true"` is added
4. to solve CORS issue file `proxy.conf.json` is added
5. in `angular.json` file `serve` target was updated `"proxyConfig": "proxy.conf.json"` 
