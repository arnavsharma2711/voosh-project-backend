import swaggerJsdoc from 'swagger-jsdoc';

const swaggerDefinition = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'My API Description',
    },
  },
  apis: ['./src/routes/**/*.ts'], // Path to the API routes in your TypeScript application
};

const swaggerSpec = swaggerJsdoc(swaggerDefinition);

export default swaggerSpec;
