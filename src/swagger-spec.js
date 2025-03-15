import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Order Service API',
    version: '1.0.0',
    description: 'Order Service API Description',
  },
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'], // Path to the API routes in your Node.js application
};

export const swaggerSpec = swaggerJSDoc(options);
