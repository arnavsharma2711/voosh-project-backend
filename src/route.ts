import express from 'express';
import v1Routes from './routes/v1.routes';
import { healthCheck } from './controllers/health.controller';

const router = express.Router();

router.get('/health', healthCheck);
router.use('/v1', v1Routes);

export default router;
