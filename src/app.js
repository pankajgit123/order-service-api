import express from 'express';
const app = express();
import fs from 'fs';

import { healthRouter, orderRouter } from './routes/index.js';
import { logRequest } from './lib/log-request.js';
import swaggerUI from 'swagger-ui-express';
import { swaggerSpec } from './swagger-spec.js';

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  fs.appendFile('./log.txt', `\n${req.method} ${req.path}`, () => {
    next();
  });
});

// Serve Swagger documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// add middleware for logging request
app.use(logRequest); // global middleware

// add middleware for health routes
app.use(healthRouter);

app.get('/', (req, res) => {
  res.send('ready to serve');
});

app.use(orderRouter);

export default app;
