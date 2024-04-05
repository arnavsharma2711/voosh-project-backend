import express from 'express';
import userRoutes from './v1/users.route';
import authRoutes from './v1/auth.route';
import dashboardRoutes from './v1/dashboard.route';
import { authenticationMiddleware } from '../middlewares/authentication';

const v1Router = express.Router();

v1Router.use('/auth', authRoutes);
v1Router.use('/user', authenticationMiddleware, userRoutes);
v1Router.use('/dashboard', authenticationMiddleware, dashboardRoutes);

export default v1Router;
