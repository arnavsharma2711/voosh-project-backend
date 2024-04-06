import { controllerWrapper } from '../../lib/controllerWrapper';
import build_response from '../../lib/response/MessageResponse';
import { userInfoSchema } from '../../lib/zod/common.schema';
import { getAllPublicUsers, getAllUsers } from '../../services/dashboard.service';

export const userList = controllerWrapper(async (req, res) => {
  const { limit, offset } = req.query;
  let userList;
  if (req.role === 'admin') {
    userList = await getAllUsers(parseInt(limit as string), parseInt(offset as string));
  } else {
    userList = await getAllPublicUsers(parseInt(limit as string), parseInt(offset as string));
  }

  userList = userList.map((user) => userInfoSchema.parse(user));

  res.status(200).json(build_response(true, 'User list retrieved successfully!', null, userList));
});
