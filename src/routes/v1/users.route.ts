import express from 'express';
import {
  getInfo,
  updateUserDetails,
  updateUserEmail,
  updateUserPassword,
  updateUserStatus,
  updateUserUsername,
} from '../../controllers/v1/user.controller';

const userRouter = express.Router();

userRouter.get('/', getInfo);
userRouter.put('/details', updateUserDetails);
userRouter.patch('/email', updateUserEmail);
userRouter.patch('/username', updateUserUsername);
userRouter.patch('/password', updateUserPassword);
userRouter.patch('/status', updateUserStatus);

export default userRouter;
