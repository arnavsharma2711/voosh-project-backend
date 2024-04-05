import express from 'express';
import { getInfo } from '../../controllers/v1/user.controller';

const userRouter = express.Router();

userRouter.get('/get-info', getInfo);

export default userRouter;
