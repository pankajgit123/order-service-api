
# Order Service API

### Intialize node js project
- npm init -y

### Install necessary npm packages
- npm i express nodemon helmet winston dotenv swagger-ui-express swagger-jsdoc pg node-pg-migrate

### Swagger

- generate jsdoc comment, on top of function inside route type /\*\*
- add swagger-spec.js to generate swagger specification


### Unit Testing

- install necessary packages. We will use Jest framework to write unit testcases
  - npm i -D jest supertest
- add babel config as supertest does not support es6 so to make it compatible
  npm install --save-dev @babel/core @babel/preset-env babel-jest
- add babel.config.js, configure Babel, a JavaScript compiler that converts modern JavaScript (ES6+) into backward-compatible versions.
- jest.confog.js to configure used to configure Jest.
  //jest -i --colors --verbose --detectOpenHandles",
