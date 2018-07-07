## Introduction

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Useful commands

Run tests
```js
npm run test
```

Start server
```js
npm run start
```

Start storybook server
```js
npm run storybook
```

## Project setup

### Environment variables

Some defined environment variables have to be defined for the project to run properly:
`REACT_APP_SERVER_ROOT_URL`: root URL to access the backend.


## Deployment

The deployment happens through [surge](http://surge.sh).
Travis-CI automatically push to surge on each merge to `master`.

### Travis-CI Setup

2 environment variables had to be setup on Travis-CI, according to the [documentation](https://docs.travis-ci.com/user/deployment/surge/):

`SURGE_LOGIN`
`SURGE_TOKEN`
