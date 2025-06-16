import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Psychotest API',
      version: '1.0.0',
      description: 'API документация для сайта психо-теста',
    },
  },
  apis: [new URL('./routes/*.js', import.meta.url).pathname]
};

const specs = swaggerJsdoc(options);

export { swaggerUi, specs };