# Travel Journal
This app is for documenting your hikes and runs, or whatever you would like to track. You can then view the gpx data parsed on a map.

![screenshot of app](https://i.imgur.com/RWq4513.png "Travel Journal App")

## Deployment

This project used angular-cli-ghpages to deploy. https://www.npmjs.com/package/angular-cli-ghpages
These commands are what brought the project to a production environment.
- `ng build --prod --base-href "https://jbuzzanco.github.io/travel-journal/"`
- `ngh --branch=gh-pages [OPTIONS]`

## Third Party Libraries:
- Leaflet - http://leafletjs.com/
- Mapbox - https://www.mapbox.com/api-documentat...
- Bootstrap 3 - http://getbootstrap.com/

## Dependencies:
- Typescript - https://typescriptlang.org
- Node.js - https://nodejs.org/en/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.4.
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

