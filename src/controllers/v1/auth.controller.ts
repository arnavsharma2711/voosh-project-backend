import build_response from '../../lib/response/MessageResponse';
import { createNewUser, validateUserCredentials } from '../../services/user.service';
import { COOKIE_SETTINGS } from '../../constants';
import { authenticateUserSchema, registerNewUserSchema } from '../../lib/zod/auth.schema';
import { controllerWrapper } from '../../lib/controllerWrapper';
import { userInfoSchema } from '../../lib/zod/common.schema';

// POST /api/v1/auth/register
export const registerNewUser = controllerWrapper(async (req, res) => {
  const { display_name, email, password } = registerNewUserSchema.parse(req.body);

  const { access_token, refresh_token, userDetails } = await createNewUser(display_name, email, password);

  const userInfo = userInfoSchema.parse(userDetails);
  res
    .status(201)
    .cookie('accessToken', access_token, COOKIE_SETTINGS)
    .cookie('refreshToken', refresh_token, COOKIE_SETTINGS)
    .json(build_response(true, 'User data created successfully!', null, userInfo));
});

// POST /api/v1/auth/login
export const loginUser = controllerWrapper(async (req, res) => {
  const { identifier, password } = authenticateUserSchema.parse(req.body);

  const { access_token, refresh_token, userDetails } = await validateUserCredentials(identifier, 'any', password);

  const userInfo = userInfoSchema.parse(userDetails);
  res
    .status(200)
    .cookie('accessToken', access_token, COOKIE_SETTINGS)
    .cookie('refreshToken', refresh_token, COOKIE_SETTINGS)
    .json(build_response(true, 'User logged in successfully!', null, userInfo));
});

//GET /api/v1/auth/logout
export const logoutUser = controllerWrapper(async (_req, res) => {
  res
    .status(204)
    .clearCookie('accessToken', COOKIE_SETTINGS)
    .clearCookie('refreshToken', COOKIE_SETTINGS)
    .json(build_response(true, 'User logged out successfully!', null, null));
});

//GET /api/v1/auth/login-failure
export const loginFailure = controllerWrapper(async (_req, res) => {
  res.status(403).json(build_response(false, 'User login failed!', null, null));
});
