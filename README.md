# Status Server

A simple web server that pings external sites and reports their status, time the request took, and the date/time accessed.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It uses [Express](https://expressjs.com/) as its server.


`src` contains client files for the front-end. `server` contains the Express application for routing and serving.
## Running Locally

In the project directory, run:

### `npm run deploy-local`

This will build the static files and start up the server on port 3000.

Open [http://localhost:3000](http://localhost:3000) to view the project in the browser.

## Additional Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Ideas for future improvements

- Add tests
- If additional vendors need to be added, consider using a config file to store their names/URLs
- Ability to filter vendors on the front end
- If vendor status code is not 200, display the last timestamp when a 200 response was received
- Remove/update unnecessary Create React App boilerplate
