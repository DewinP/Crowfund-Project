# Welcome to Crowfund

Crowfund is a crowdfunding web application developed primarily in Typescript, React.Js, Redux-Toolkit, Express.Js and MongoDB.

Try the **Crowfund** out: [https://crowfund-project.vercel.app](https://crowfund-project.vercel.app/)

It allows users to create campaigns and allow other users to contribute to them to help them reach their goal. This is a simple example of a crowdfunding web application. However, it has been developed to be as robust as possible in the 12 days that it has been in development.

# Functionalities

As a guest/unathorized user, they can

- Read projects
- Read projects comments made by other users
- Sort projects
- Create an account
- Login to their account

A logged in user can

- Create a project
- Edit their project's name, description and/or due date
- Delete their project if no pledges/contributions have been made by another user
- Create, edit and delete their comments
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

# Database Schema

![Database Schema](https://i.imgur.com/XLJl9FD.png)

//example of a expected payload and response from the database

---

`POST: /api/projects/${productId}`

```
{
  "name": "Crowfund",
  "description": "Crowfund is a crowdfunding web application developed primarily in Typescript, React.Js, Redux-Toolkit, Express.Js and MongoDB.",
  "dueDate": "2020-12-31T23:59:59.999Z",
  "pledgeGoal": "10000",
  "HeroImage": "https://i.imgur.com/XLJl9FD.png",
}

```

OK 200 Response:

```
{
  "_id": "5f3f8f8f8f8f8f8f8f8f8f8",
}
```

Error 400 Response:

```
{
  "field": "error message"
}
```

---

# Accessibility

Accessibility is a very important part of the development of a web application. It is important to make sure that the application is accessible to all users. Crowfund aims to make sure that the application is accessible to all users by using Chakra-UI. Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications. One example of this is the use of the `Progress` component. This component is used to display the progress of a project. `Progress` component has a role set to `progressbar`. This means that the component is used to display the progress of a project. It also has a aria-valuenow set to the current progress of the project. This is used to ensure the current progress percent is visible to screen readers and other assistive technologies.

# Best Practices

The best practices used in this project are the [KISS](https://en.wikipedia.org/wiki/KISS_principle) and [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

One example of this is by creating components that are reusable. This allows you to create a component that can be used in multiple places in the application. This is a good practice to follow because it makes the code more readable and easier to maintain.

# Crowfund Screenshots

###### Homepage

![Landing Page](https://i.imgur.com/1Hb0D9M.png)

> This is the landing page of the application. The user can see a list of projects and can create an account or login to their account.

---

###### Signup Page:

![Signup page](https://i.imgur.com/37We2vU.png)

> This is the signup page of the application. The user can create an account. The user can also login to their account by clicking on the `Already have an account? Login` link. On signup success, the user is redirected to the login page.

---

###### Login Page:

![Login page](https://i.imgur.com/H9fABrz.png)

> This is the login page of the application. The user can login to their account. The user can also create an account by clicking on the `Not Registered? Signup instead` link. On Login success, the user is redirected to the homepage.

---

###### Create Project Page:

## ![Create Project](https://i.imgur.com/TMXk5m9.png)

> An authenticated user can create a project. The project must have a name, description, pledge goal and due date. As soon as the user clicks on the `Create Project` button, the project is created and the user is redirected to the project page for said project. Clicking `Cancel` button will redirect the user back one page.

###### Project Page:

![Project Page](https://i.imgur.com/YUumS9X.png)

> The user just visited the project _Keyless Keyboard_ creaded by John Smith. The user can see the project name, description, pledge goal, due date, and the current progress of the project. The user can also pledge to the project by clicking on the `Become a backer` button. The user can also go ahead and comment on the project by clicking on the `Comment` Tab.

###### Update Project Page:

![Update Project](https://i.imgur.com/5L7YgZw.png)

> This is the update project page of the application. The user can update the project's name, description and/or due date. The user can also delete the project if no pledges/contributions have been made by another user.

---

###### Pledge Page:

Shows the user's pledge history
![Pledge Page](https://i.imgur.com/1Ss4FRh.png)

> The user can navigate to the pledge page by clicking in the top right navigation menu. The user can see their pledge history. User can visit the project page by clicking on the pledge's project name.

---

###### Users Projects Page:

Shows the user's own projects
![Users Projects Page](https://i.imgur.com/4XuK4vU.png)

> User can see their own projects by navigating to `Owned projects` section in the top right navigation menu.

---

###### Pledge Feature:

| Pledge Page                                     | Redirection to Stripe Checkout                      |
| ----------------------------------------------- | --------------------------------------------------- |
| ![Pledge Page](https://i.imgur.com/m5pB139.png) | ![Stripe Checkpit](https://i.imgur.com/vHpF9aW.png) |

> The User wants to pledge $45 to a project. On clicking the `Pledge Now` button, the user is redirected to the Stripe Checkout page.

###### Success Page:

![Success Page](https://i.imgur.com/bUtgrvL.png)

> If the stripe checkout is successful, the user will be redirected to the success page. Otherwise, the user will be redirected to the pledge page.

```

```
