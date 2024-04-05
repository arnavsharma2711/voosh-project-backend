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

userRouter.get('/', getInfo);
userRouter.put('/details', updateUserDetails);
userRouter.patch('/email', updateUserEmail);
userRouter.patch('/username', updateUserUsername);
userRouter.patch('/password', updateUserPassword);
userRouter.patch('/status', updateUserStatus);
userRouter.patch('/profile-picture', upload, updateUserProfilePicture);

export default userRouter;
