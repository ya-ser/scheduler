# Interview Scheduler

The Interview Scheduler is a simple solution to allow students to create appointments with mentors, clearly and quickly!

>Add
![Add](gifs/add.gif)

>Edit
![Edit](gifs/edit.gif)

>Delete
![Delete](gifs/delete.gif)

The Interview Scheduler is a single page client application created using Create React App. Express is the basis for the Scheduler API server application.

Both servers run concurrently; requests are proxied from the Webpack development server to the API server.

## Testing

Testing is an important part of any app. The Interview scheduler uses two different testing librariers, Jest and Cypress. Jest was used mainly to perform integration tests while Cypress was used for end to end testing.

## Dependencies

- axios
- classnames
- eslint
- normalize.css
- react
- react-dom
- react-scripts

## Setup

Install dependencies with `npm install`.

Clone Scheduler API from [here](https://github.com/ya-ser/scheduler-api) and follow the instructions provided in the README.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
