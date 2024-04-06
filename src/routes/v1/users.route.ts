import express from 'express';
import {
  getInfo,
  updateUserDetails,
  updateUserEmail,
  updateUserPassword,
  updateUserProfilePicture,
  updateUserStatus,
  updateUserUsername,
} from '../../controllers/v1/user.controller';
import upload from '../../middlewares/multer';

const userRouter = express.Router();

/**
 * @swagger
 * /api/v1/user:
 *   get:
 *     summary: Get user information
 *     parameters:
 *       - in: cookie
 *         name: accessToken
 *         schema:
 *           type: string
 *         required: true
 *         description: Access token for user authentication.
 *       - in: cookie
 *         name: refreshToken
 *         schema:
 *           type: string
 *         required: true
 *         description: Refresh token for user authentication.
 *     responses:
 *       200:
 *         description: Returns user information.
 */
userRouter.get('/', getInfo);

/**
 * @swagger
 * /api/v1/user/details:
 *   put:
 *     summary: Update user details
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
 *               first_name:
 *                 type: string
 *                 description: The first name of the user.
 *               last_name:
 *                 type: string
 *                 description: The last name of the user.
 *               phone_number:
 *                 type: string
 *                 description: The phone number of the user.
 *               profile_picture:
 *                 type: string
 *                 description: The profile picture of the user.
 *               bio:
 *                 type: string
 *                 description: The bio of the user.
 *     responses:
 *       204:
 *         description: User details updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: The success status of the response.
 *                 message:
 *                   type: string
 *                   description: The message of the response.
 *                 error:
 *                   type: string
 *                   description: The error message, if any.
 *                   nullable: true
 *                 data:
 *                   type: object
 *                   description: The updated user details.
 *                   properties:
 *                     display_name:
 *                       type: string
 *                     first_name:
 *                       type: string
 *                     last_name:
 *                       type: string
 *                     phone_number:
 *                       type: string
 *                     profile_picture:
 *                       type: string
 *                     bio:
 *                       type: string
 */
userRouter.put('/details', updateUserDetails);

/**
 * @swagger
 * /api/v1/user/email:
 *   patch:
 *     summary: Update user email
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The new email of the user.
 *     responses:
 *       204:
 *         description: User email updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: The success status of the response.
 *                 message:
 *                   type: string
 *                   description: The message of the response.
 */
userRouter.patch('/email', updateUserEmail);

/**
 * @swagger
 * /api/v1/user/username:
 *   patch:
 *     summary: Update user username
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The new username of the user.
 *     responses:
 *       204:
 *         description: User username updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: The success status of the response.
 *                 message:
 *                   type: string
 *                   description: The message of the response.
 */
userRouter.patch('/username', updateUserUsername);

/**
 * @swagger
 * /api/v1/user/password:
 *   patch:
 *     summary: Update user password
 *     responses:
 *       200:
 *         description: User password updated successfully.
 */
userRouter.patch('/password', updateUserPassword);

/**
 * @swagger
 * /api/v1/user/status:
 *   patch:
 *     summary: Update user status
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: The new status of the user.
 *     responses:
 *       204:
 *         description: User status updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: The success status of the response.
 *                 message:
 *                   type: string
 *                   description: The message of the response.
 */
userRouter.patch('/status', updateUserStatus);

/**
 * @swagger
 * /api/v1/user/profile-picture:
 *   patch:
 *     summary: Update user profile picture
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: The new profile picture file.
 *     responses:
 *       204:
 *         description: User profile picture updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: The success status of the response.
 *                 message:
 *                   type: string
 *                   description: The message of the response.
 */
userRouter.patch('/profile-picture', upload, updateUserProfilePicture);

export default userRouter;
