import express from 'express';
import { loginFailure, loginUser, logoutUser, registerNewUser } from '../../controllers/v1/auth.controller';
import { googleAuthCallback, loginUserViaGoogle } from '../../controllers/v1/provider.controllers/google.provider.controller';
import { githubAuthCallback, loginUserViaGithub } from '../../controllers/v1/provider.controllers/github.provider.controller';

const authRouter = express.Router();

authRouter.post('/register', registerNewUser);
authRouter.post('/login', loginUser);
authRouter.get('/logout', logoutUser);

authRouter.get('/login/via/google', loginUserViaGoogle);
authRouter.get('/login/via/google/callback', googleAuthCallback);

authRouter.get('/login/via/github', loginUserViaGithub);
authRouter.get('/login/via/github/callback', githubAuthCallback);

authRouter.get('/login-failure', loginFailure);

export default authRouter;
