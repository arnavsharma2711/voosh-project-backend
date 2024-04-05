import express from 'express';
import { loginUser, registerNewUser } from '../../controllers/v1/auth.controller';

const authRouter = express.Router();

authRouter.post('/register', registerNewUser);
authRouter.post('/login', loginUser);

export default authRouter;
