<p align="center">
  <a href="https://nodejs.org/">
    <img
      alt="Node.js"
      src="https://nodejs.org/static/images/logo-light.svg"
      width="400"
    />
  </a>
</p>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

An Express server was added in the `server` directory. The server is proxied via the `proxy` key in `package.json`.

Create a `.env` file for environment variables in your server.

Open the terminal and run `npm run dev`.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Set up a React App with a Node.js Express Server Proxy

[Create React App](https://github.com/facebook/create-react-app) is a great tool for starting development on a React application. This requires a server side component for accomplishing tasks such as generating access tokens. A great way to solve this problem is by working with a server within the same project so that you can start everything up with one command.

This project is designed to help you jump right into a starter project with a React application and with an Express server. This project also utilizes [Semantic UI](https://semantic-ui.com/) for it components. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Clone the project, change into the directory, and install the dependencies:

```
git clone https://github.com/tjmareng/react-express-startup.git
cd react-express-startup
npm install or npm i
```

### Prerequisites

Installing Node.js and NPM:

```
1. Visit https://nodejs.org/en/ or https://nodejs.org/en/download/
2. Click on the 'Recommended For Most Users' Download or click the 'LTS' Tab within the download page
3. Run the file
4. After installation, close the terminal
5. Open the terminal and type 'node --version'
6. v10.15.3 or a later version should appear
```
Reference [this](https://wsvincent.com/install-node-js-npm-windows/) page if you run into any issues.

### Installing

Step by step example on how to get your development environment running:

Installing node_modules:

```
1. npm install - installs all dependencies
2. Check for the node_modules folder
```

Creating an environment:

```
1. Create a file called `.env` in the project directory to store our environment variables. 
2. This will be useful later for including any credentials we need for the server, like API keys.
```

### Deployment

Run `npm run dev` and both the React application and the server will start up. However, we now can't load localhost:3000/greeting in the browser because the Create React App proxy will just respond with the base HTML.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. You should be able to select submit and 'Hello World' should appear. Otherwise, you can type your name that that will appear in place of 'World'.

## Additional Information

You can start the server on its own with the command:
```
npm run server
```
Run the React application on its own with the command:
```
npm start
```
Run both applications together with the command:
```
npm run dev
```
The React application will run on port 3000 and the server port 3001 (which can be changed).

This is an effective way to generate access tokens like [JSON Web Tokens](https://jwt.io/). If this is what you are looking for I would recommend installing [Postman](https://www.getpostman.com/).

## Troubleshooting

Missing modules:

```
run `npm install node-env-run nodemon npm-run-all express-pino-logger pino-colada --save-dev`
```
```
run `npm i semantic-ui --save`
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
