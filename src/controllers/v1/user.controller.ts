import { controllerWrapper } from '../../lib/controllerWrapper';
import build_response from '../../lib/response/MessageResponse';
import { userInfoSchema } from '../../lib/zod/auth.schema';

//GET /api/v1/auth/logout
export const getInfo = controllerWrapper(async (req, res) => {
  const user = req.user;

  const userInfo = userInfoSchema.parse(user);
  res.status(200).json(build_response(true, 'User data retrieved successfully!', null, userInfo));
});
