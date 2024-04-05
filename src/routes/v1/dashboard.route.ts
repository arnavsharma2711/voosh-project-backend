import express from 'express';
import { userList } from '../../controllers/v1/dashboard.controller';
import { adminMiddleware } from '../../middlewares/admin.authentication';

const dashboardRouter = express.Router();

/**
 * @swagger
 * /api/v1/dashboard:
 *   get:
 *     summary: Get a list of users
 *     responses:
 *       200:
 *         description: Returns a list of users.
 */
dashboardRouter.get('/', adminMiddleware, userList);

export default dashboardRouter;
