# Welcome to Crowfund

Crowfund is a crowdfunding web application developed primarily in Typescript, React.Js, Express.Js and MongoDB.

# Functionalities

As a guest/unathorized user, they can

- Read projects
- Sort projects
- Create an account
- Login to their account

A logged in user can

- Create a project
- Edit their project's name, description and/or due date
- Delete their project if no pledges/contributions have been made by another user
- Pledge/contribute towards a project.
- See all information about all pledges made by the user

# Installation

To get this project ot run localy, download or clone this repository. You should now have two folders `frontend` and `backend`.

To install the `backend` run the fallowing commands in the command line, from the root directory.

```
$ cd backend
$ npm i or npm install
$ cd config
- visit mongodb.com and create a database and make sure you add you whitelist your ip address so that you can access your database.
- open the `default.ts` file and add/change the variables according to your liking.
```

To run the `backend` server.

```
$ npm run dev
 -code will run in the port on the localhost:1337, unless changed in the `config.ts` file.
```

To setup and run the `frontend` run the fallowing commands in the command line, from the root directory.

```
$ cd backend
$ npm i or npm install
$ touch .env
$ npm run dev
- add the NEXT_PUBLIC_SERVER_ENDPOINT and NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY to the .env file - code will run in the port on the localhost:3000, unless changed in the `.env` file
```

# Best Practices
