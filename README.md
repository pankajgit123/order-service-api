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
- npx husky install (to initialize husky, this will add .husky folder to your project)

## Prettier

- Prettier is a code formatter used to ensure that code is consistent, clean, and easy to read

  ```bash
  npm i --save-d prettier
  ```

- Add .prettierrc, .prettierignore to exclude files
- Go to Settings (vs code) → Text Editor → Formatting → Format on save

lint-staged is a tool that allows you to run linters and formatters (like ESLint, Prettier) on files that have been staged for a Git commit

- Add pre-commit file touch .husky/pre-commit
- Add these commands

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
npx lint-staged
```

- modify package.json accordingly

```
"lint-staged": {
    ".js": [
      "eslint — fix",
      "prettier — write",
      "git add"
    ],
    "**/*": "prettier --write --ignore-unknown"
  }
```
