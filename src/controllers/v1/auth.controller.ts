import build_response from '../../lib/response/MessageResponse';
import { createNewUser } from '../../services/user.service';
import { COOKIE_SETTINGS } from '../../constants';
import { registerNewUserSchema, userInfoSchema } from '../../lib/zod/auth.schema';
import { controllerWrapper } from '../../lib/controllerWrapper';

// POST /api/v1/auth/register
export const registerNewUser = controllerWrapper(async (req, res) => {
  const { display_name, email, password } = registerNewUserSchema.parse(req.body);

  const { access_token, refresh_token, userDetails } = await createNewUser(display_name, email, password);

  const userInfo = userInfoSchema.parse(userDetails);
  res
    .status(200)
    .cookie('accessToken', access_token, COOKIE_SETTINGS)
    .cookie('refreshToken', refresh_token, COOKIE_SETTINGS)
    .json(build_response(true, 'User data created successfully!', null, userInfo));
});
