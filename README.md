# Welcome to Crowfund

Crowfund is a crowdfunding web application developed primarily in Typescript, React.Js, Express.Js and MongoDB.

It allows users to create campaigns and allow other users to contribute to them to help them reach their goal. This is a simple example of a crowdfunding web application. However, it has been developed to be as robust as possible in the 12 days that it has been in development.

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

# Architechture pattern

The architecture pattern used in this project is the [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) pattern.

The MVC pattern is used in this project to separate the logic of the application from the presentation layer. This is done by separating the logic of the application into the `backend` folder and the `frontend` folder. The `backend` folder contains the logic of the application and the `frontend` folder contains the presentation layer.

# Best Practices

The best practices used in this project are the [KISS](https://en.wikipedia.org/wiki/KISS_principle) and [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

One example of this is by creating components that are reusable. This allows you to create a component that can be used in multiple places in the application. This is a good practice to follow because it makes the code more readable and easier to maintain.

# Crowfund Screenshots

###### Signup Page:

![Signup page](https://i.imgur.com/37We2vU.png)

###### Login Page:

![Login page](https://i.imgur.com/H9fABrz.png)

###### Landing Page

![Landing Page](https://i.imgur.com/Rlbp2hv.png)

###### Create Project Page:

![Create Project](https://i.imgur.com/TMXk5m9.png)

###### Project Page:

Shows the project page with the project's information and the pledges made with a progress bar showing the percentage towards the goal.
![Project Page](https://i.imgur.com/YUumS9X.png)

###### Update Project Page:

![Update Project](https://i.imgur.com/N28ptPB.png)

###### Pledge Page:

Shows the user's pledge history
![Pledge Page](https://i.imgur.com/1Ss4FRh.png)

###### Users Projects Page:

Shows the user's own projects
![Users Projects Page](https://i.imgur.com/kzuUrG4.png)

###### Pledge Feature:

| Pledge Page                                     | Redirection to Stripe Checkout                      |
| ----------------------------------------------- | --------------------------------------------------- |
| ![Pledge Page](https://i.imgur.com/m5pB139.png) | ![Stripe Checkpit](https://i.imgur.com/vHpF9aW.png) |

Success Page:

- If the stripe checkout is successful, the user will be redirected to the success page. Otherwise, the user will be redirected to the pledge page.
  ![Success Page](https://i.imgur.com/bUtgrvL.png)
