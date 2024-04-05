import { controllerWrapper } from '../lib/controllerWrapper';
import { getUserRole } from '../services/user.service';

export const adminMiddleware = controllerWrapper(async (req, _res, next) => {
  const user_id = req.user.id;
  let role = await getUserRole(user_id);
  if (!role) {
    role = 'user';
  }
  req.role = role;
  next();
});
