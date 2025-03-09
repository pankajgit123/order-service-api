FROM node:22-alpine

WORKDIR /order-api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "node", "src/server.js" ]