import express from 'express';
import { registerNewUser } from '../../controllers/v1/auth.controller';

const authRouter = express.Router();

authRouter.post('/register', registerNewUser);

export default authRouter;
