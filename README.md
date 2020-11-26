# Test Orbit Hub API

> Code developed for the Orbit Hub Fullstack Developer test.


# Techs


- [Node](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Punk API](https://punkapi.com/)


# Installation

**You need to install [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) first.**

```git clone https://github.com/mariana-pereira/test-orbithub-api.git```

SSH URLs provide access to a Git repository via SSH, a secure protocol. If you have a SSH key registered in your Github account, clone the project using this command:

```git clone git@github.com:mariana-pereira/test-orbithub-api.git```

Run `yarn` to install dependencies.<br />


# Getting Started

Change .env.example to .env and set your database credentials.

Run `yarn typeorm migration:run` in order to run the migrations.

Run `yarn dev` in order to start the application in a development environment.

or

Run `yarn build` and then `yarn start` in order to start the application in a production environment.


# Available endpoints

Users

GET http://localhost:3333/users to fetch all users. Your need to pass an Authorization Token to access this endpoint.

GET http://localhost:3333/users/id to fetch a specific user. Your need to pass an Authorization Token to access this endpoint.

POST http://localhost:3333/users to create a new user. Send { "username": "YOUR_USERNAME", "email": "YOUR_EMAIL", "password_hash": "YOUR PASSWORD" } in request's body.

PUT http://localhost:3333/users/id to update an user. Send { "username": "YOUR_USERNAME", "email": "YOUR_EMAIL", "oldPassword": "YOUR_OLD_PASSWORD", "newPassword": "YOUR_NEW_PASSWORD" } in request's body. Your need to pass an Authorization Token to access this endpoint.

DELETE http://localhost:3333/users to delete an user. Your need to pass an Authorization Token to access this endpoint.

Session

POST http://localhost:3333/session to authenticate an user. Send { "username": "YOUR_USERNAME", "password": "YOUR PASSWORD" } in request's body.

Beers

GET http://localhost:3333/beers to fetch all beers. Your need to pass an Authorization Token to access this endpoint.

GET http://localhost:3333/beers/id to fetch a specific beer. Send page and perPage values in your query params. Your need to pass an Authorization Token to access this endpoint.
