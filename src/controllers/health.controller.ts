import build_response from '../lib/response/MessageResponse';
import { controllerWrapper } from '../lib/controllerWrapper';

// POST /api/v1/auth/register
export const healthCheck = controllerWrapper(async (_req, res) => {
  res.status(200).json(build_response(true, 'API is up and running!', null, null));
});
