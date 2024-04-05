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
 * /users:
 *   get:
 *     summary: Get user information
 *     responses:
 *       200:
 *         description: Returns user information.
 */
userRouter.get('/', getInfo);

/**
 * @swagger
 * /users/details:
 *   put:
 *     summary: Update user details
 *     responses:
 *       200:
 *         description: User details updated successfully.
 */
userRouter.put('/details', updateUserDetails);

/**
 * @swagger
 * /users/email:
 *   patch:
 *     summary: Update user email
 *     responses:
 *       200:
 *         description: User email updated successfully.
 */
userRouter.patch('/email', updateUserEmail);

/**
 * @swagger
 * /users/username:
 *   patch:
 *     summary: Update user username
 *     responses:
 *       200:
 *         description: User username updated successfully.
 */
userRouter.patch('/username', updateUserUsername);

/**
 * @swagger
 * /users/password:
 *   patch:
 *     summary: Update user password
 *     responses:
 *       200:
 *         description: User password updated successfully.
 */
userRouter.patch('/password', updateUserPassword);

/**
 * @swagger
 * /users/status:
 *   patch:
 *     summary: Update user status
 *     responses:
 *       200:
 *         description: User status updated successfully.
 */
userRouter.patch('/status', updateUserStatus);

/**
 * @swagger
 * /users/profile-picture:
 *   patch:
 *     summary: Update user profile picture
 *     responses:
 *       200:
 *         description: User profile picture updated successfully.
 */
userRouter.patch('/profile-picture', upload, updateUserProfilePicture);

export default userRouter;
