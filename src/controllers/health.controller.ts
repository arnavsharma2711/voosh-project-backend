import build_response from '../lib/response/MessageResponse';
import { wrapAsync } from '../lib/wrapAsync';

// POST /api/v1/auth/register
export const healthCheck = wrapAsync(async (_req, res) => {
  res.status(200).json(build_response(true, 'API is up and running!', null, null));
});
