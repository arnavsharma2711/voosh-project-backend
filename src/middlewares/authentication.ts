import jwt, { JwtPayload } from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET } from '../constants';
import { controllerWrapper } from '../lib/controllerWrapper';
import { findUserById } from '../services/user.service';
import { CustomError } from '../lib/error/custom.error';

export const authenticationMiddleware = controllerWrapper(async (req, res, next) => {
  const { accessToken } = req.cookies || {};
  const authorization = req.header('Authorization') || '';
  const access_token = accessToken || authorization.replace('Bearer ', '');

  if (!access_token) {
    throw new CustomError(401, 'Invalid Access Token', 'Access Token is required!');
  }

  const decodedToken = jwt.verify(access_token, ACCESS_TOKEN_SECRET) as JwtPayload;
  const userDetails = await findUserById(decodedToken?.id);

  if (!userDetails) {
    res.sendStatus(401);
    throw new CustomError(401, 'Invalid Access Token', 'Access Token is required!');
  }

  req.user = userDetails;
  next();
});
