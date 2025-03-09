- npm init -y
- touch app.js
- touch README.md
- npm i express nodemon helmet winston dotenv swagger-ui-express swagger-jsdoc pg node-pg-migrate

## Docker

- add Dockerfile (keep same naming convention)

  - docker compose up -d (to run in background)
  - docker compose down

- add docker.compose.yml

## Swagger

- generate jsdoc comment, on top of function inside route type /\*\*

## Test

```bash
  npm i -D jest supertest
  add babel config as supertest does not support es6 so to make it compatible
  npm install --save-dev @babel/core @babel/preset-env babel-jest
  //jest -i --colors --verbose --detectOpenHandles",
```

## Husky
- npm install --save-dev husky
