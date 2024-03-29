## Student-Admin Management System

This repository contains the codebase for a web application designed for student and admin management. The system allows students to access data from a dashboard, while admins have full control over managing, updating, and deleting data.

## Features

Student Dashboard: Provides students with access to relevant data.

Admin Privileges: Admins can perform CRUD (Create, Read, Update, Delete) operations on all data within the system.

## Technologies Used

Node.js: Backend server environment.
Express.js: Web application framework for Node.js.
MongoDB: Database for storing user and system data.
Mongoose: MongoDB object modeling tool for Node.js.
Postman/Thunder Client: Tools for testing and interacting with APIs.

## Admin Signup

To become an admin, follow the steps below:

Signup Schema: Admins must adhere to a specific signup schema.

    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "admin" },

    or use this detail for signin(admin) 
    name:"sanjeev",
    email:"sanjeev249116@gmail.com",
    password:"123",

## Signup Endpoint: Admins should sign up using the following endpoint:

Endpoint: https://backend-idea-0bbp.onrender.com/signup
Method: POST
Body: Send signup data with all required fields without any omissions.

## Deplolyed App

Frontend: https://chesses-app.vercel.app<br>
Backend: https://backend-idea-0bbp.onrender.com/<br>
Backend GitHub: https://github.com/Sanjeevk249116/backend_idea<br>

## Directory Structure

reacthub/
├─ backend/
├─ frontend/
│ ├─ src
├─ authContainer
├─ components
├─ navbar
├─ pages
├─ redux
├─ routers

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
