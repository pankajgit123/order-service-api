import express from 'express';
const app = express();

import { healthRouter, orderRouter } from './routes/index.js';
import { logRequest } from './lib/log-request.js';
import swaggerUI from 'swagger-ui-express';
import { swaggerSpec } from './swagger-spec.js';

app.use(express.json());

// Serve Swagger documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// add middleware for logging request
app.use(logRequest);

// add middleware for health routes
app.use(healthRouter);

app.get('/', (req, res) => {
  res.send('ready to serve');
});

app.use(orderRouter);

export default app;
