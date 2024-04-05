import express from 'express';
import { loginFailure, loginUser, logoutUser, registerNewUser } from '../../controllers/v1/auth.controller';
import { googleAuthCallback, loginUserViaGoogle } from '../../controllers/v1/provider.controllers/google.provider.controller';
import { githubAuthCallback, loginUserViaGithub } from '../../controllers/v1/provider.controllers/github.provider.controller';

const authRouter = express.Router();

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Register a new user
 *     responses:
 *       200:
 *         description: User registered successfully.
 */
authRouter.post('/register', registerNewUser);

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Login a user
 *     responses:
 *       200:
 *         description: User logged in successfully.
 */
authRouter.post('/login', loginUser);

/**
 * @swagger
 * /api/v1/auth/logout:
 *   get:
 *     summary: Logout a user
 *     responses:
 *       200:
 *         description: User logged out successfully.
 */
authRouter.get('/logout', logoutUser);

/**
 * @swagger
 * /api/v1/auth/login/via/google:
 *   get:
 *     summary: Login via Google
 *     responses:
 *       200:
 *         description: User logged in via Google successfully.
 */
authRouter.get('/login/via/google', loginUserViaGoogle);

/**
 * @swagger
 * /api/v1/auth/login/via/google/callback:
 *   get:
 *     summary: Google auth callback
 *     responses:
 *       200:
 *         description: Google auth callback handled.
 */
authRouter.get('/login/via/google/callback', googleAuthCallback);

/**
 * @swagger
 * /api/v1/auth/login/via/github:
 *   get:
 *     summary: Login via Github
 *     responses:
 *       200:
 *         description: User logged in via Github successfully.
 */
authRouter.get('/login/via/github', loginUserViaGithub);

/**
 * @swagger
 * /api/v1/auth/login/via/github/callback:
 *   get:
 *     summary: Github auth callback
 *     responses:
 *       200:
 *         description: Github auth callback handled.
 */
authRouter.get('/login/via/github/callback', githubAuthCallback);

/**
 * @swagger
 * /api/v1/auth/login-failure:
 *   get:
 *     summary: Login failure
 *     responses:
 *       200:
 *         description: Login failure handled.
 */
authRouter.get('/login-failure', loginFailure);

export default authRouter;
