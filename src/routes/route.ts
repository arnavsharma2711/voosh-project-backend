import express from 'express';
import v1Routes from './v1.routes';
import { healthCheck } from '../controllers/health.controller';

const router = express.Router();

/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Health Check
 *     description: Check if the API is up and running.
 *     responses:
 *       200:
 *         description: API is up and running.
 */
router.get('/health', healthCheck);
router.use('/v1', v1Routes);

export default router;
