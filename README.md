# Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Description
### For Frontend
Designed a small Single Page Application(in Angular 5/6 ) to manage a list of people. Created 3 views to
-list all people
-edit a person 
-delete a person

### For backend
Create  RESTful Web Service Using  Nodejs and  MongoDB(to store Data). 

GET /person: Displays a table with a list of people
POST /person: Displays a form to create a single person
PUT /person/{id}: Displays a form through which a person with a specified id parameter can be edited and updated
DELETE /person/{id}: Displays a page through which a person with a specified id can be deleted

**Person collection fields: Name, Age, Gender, Mobile number

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
