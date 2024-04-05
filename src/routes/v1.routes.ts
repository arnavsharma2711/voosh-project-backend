import express from 'express';
import userRoutes from './v1/users.route';

const v1Router = express.Router();

v1Router.use('/user', userRoutes);

export default v1Router;
