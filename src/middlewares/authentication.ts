import jwt, { JwtPayload } from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET } from '../constants';
import { controllerWrapper } from '../lib/controllerWrapper';
import { findUserById } from '../services/user.service';

export const authenticationMiddleware = controllerWrapper(async (req, res, next) => {
  const { accessToken } = req.cookies || {};
  const authorization = req.header('Authorization') || '';
  const access_token = accessToken || authorization.replace('Bearer ', '');

  if (!access_token) {
    throw new Error('Invalid Access Token');
  }

  const decodedToken = jwt.verify(access_token, ACCESS_TOKEN_SECRET) as JwtPayload;
  const userDetails = await findUserById(decodedToken?.id);

  if (!userDetails) {
    res.sendStatus(401);
    throw new Error('Invalid Access Token');
  }

  req.user = userDetails;
  next();
});
