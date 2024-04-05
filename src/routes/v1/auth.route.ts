import express from 'express';
import { loginUser, logoutUser, registerNewUser } from '../../controllers/v1/auth.controller';

const authRouter = express.Router();

authRouter.post('/register', registerNewUser);
authRouter.post('/login', loginUser);
authRouter.get('/logout', logoutUser);

export default authRouter;
