import express from 'express';
import morganLogger from 'morgan';
import helmetSecurity from 'helmet';
import corsMiddleware from 'cors';
import cookieParserMiddleware from 'cookie-parser';
import path from 'path';
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from './swagger';
import { handleError, handleNotFound } from './middlewares/middlewares';

import dotenv from 'dotenv';
dotenv.config();

const expressApp = express();
expressApp.use(morganLogger('dev'));
expressApp.use(helmetSecurity());
expressApp.use(corsMiddleware());
expressApp.use(express.json());
expressApp.use(cookieParserMiddleware());

// Define root route
expressApp.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});
expressApp.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Importing API routes
import apiRoutes from './routes/route';
expressApp.use('/api', apiRoutes);

// Use custom middlewares for handling 404 and errors
expressApp.use(handleNotFound);
expressApp.use(handleError);

export default expressApp;
