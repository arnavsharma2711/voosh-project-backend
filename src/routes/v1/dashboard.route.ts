import express from 'express';
import { userList } from '../../controllers/v1/dashboard.controller';
import { adminMiddleware } from '../../middlewares/admin.authentication';

const dashboardRouter = express.Router();

dashboardRouter.get('/', adminMiddleware, userList);

export default dashboardRouter;
