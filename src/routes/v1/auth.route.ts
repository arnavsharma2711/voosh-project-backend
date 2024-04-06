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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               display_name:
 *                 type: string
 *                 description: The display name of the user.
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 description: The email of the user.
 *                 example: example1@gmail.com
 *               password:
 *                 type: string
 *                 description: The password of the user.
 *                 example: Deafult@117
 *     responses:
 *       201:
 *         description: User registered successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: The success status of the response.
 *                   example: true
 *                 message:
 *                   type: string
 *                   description: The message of the response.
 *                   example: "User data created successfully!"
 *                 data:
 *                   type: object
 *                   description: The data of the response.
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The id of the user.
 *                       example: 1
 *                     email:
 *                       type: string
 *                       description: The email of the user.
 *                       example: "example1@gmail.com"
 *                     display_name:
 *                       type: string
 *                       description: The display name of the user.
 *                       example: "John Doe"
 *                     username:
 *                       type: string
 *                       description: The username of the user.
 *                       example: "john_doe_740a27"
 */
authRouter.post('/register', registerNewUser);

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Login a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               identifier:
 *                 type: string
 *                 description: The email of the user.
 *                 example: example1@gmail.com
 *               password:
 *                 type: string
 *                 description: The password of the user.
 *                 example: Deafult@117
 *     responses:
 *       200:
 *         description: User logged in successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: The success status of the response.
 *                   example: true
 *                 message:
 *                   type: string
 *                   description: The message of the response.
 *                   example: "User logged in successfully!"
 *                 data:
 *                   type: object
 *                   description: The data of the response.
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The id of the user.
 *                       example: 14
 *                     email:
 *                       type: string
 *                       description: The email of the user.
 *                       example: "email@gmail.com"
 *                     display_name:
 *                       type: string
 *                       description: The display name of the user.
 *                       example: "Arnav Shamra"
 *                     username:
 *                       type: string
 *                       description: The username of the user.
 *                       example: "arnav_shamra_ade77a"
 *                     first_name:
 *                       type: string
 *                       description: The first name of the user.
 *                       nullable: true
 *                     last_name:
 *                       type: string
 *                       description: The last name of the user.
 *                       nullable: true
 *                     phone_number:
 *                       type: string
 *                       description: The phone number of the user.
 *                       nullable: true
 *                     profile_picture:
 *                       type: string
 *                       description: The profile picture of the user.
 *                       nullable: true
 *                     bio:
 *                       type: string
 *                       description: The bio of the user.
 *                       nullable: true
 *                     status:
 *                       type: string
 *                       description: The status of the user.
 *                       example: "public"
 */
authRouter.post('/login', loginUser);

/**
 * @swagger
 * /api/v1/auth/logout:
 *   get:
 *     summary: Logout a user
 *     responses:
 *       204:
 *         description: User logged out successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: The success status of the response.
 *                   example: true
 *                 message:
 *                   type: string
 *                   description: The message of the response.
 *                   example: "User logged out successfully!"
 */
authRouter.get('/logout', logoutUser);

/**
 * @swagger
 * /api/v1/auth/login/via/google:
 *   get:
 *     summary: Login via Google
 *     description: This API redirects to Google for authentication and cannot be tested using Swagger.
 *     responses:
 *       302:
 *         description: Redirect to Google for authentication.
 *       200:
 *         description: User logged in via Google successfully.
 */
authRouter.get('/login/via/google', loginUserViaGoogle);

/**
 * @swagger
 * /api/v1/auth/login/via/google/callback:
 *   get:
 *     summary: Google auth callback
 *     description: This API handles the Google auth callback and cannot be tested using Swagger.
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
 *     description: This API redirects to Github for authentication and cannot be tested using Swagger.
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
 *     description: This API handles the Github auth callback and cannot be tested using Swagger.
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
 *       203:
 *         description: Login failure handled.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: The success status of the response.
 *                   example: false
 *                 message:
 *                   type: string
 *                   description: The message of the response.
 *                   example: "User login failed!"
 */
authRouter.get('/login-failure', loginFailure);

export default authRouter;
