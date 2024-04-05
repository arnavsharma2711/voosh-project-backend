import { controllerWrapper } from '../../lib/controllerWrapper';
import build_response from '../../lib/response/MessageResponse';
import { emailUpdateSchema, passwordUpdateSchema, statusUpdateSchema, updateUserInfoSchema, usernameUpdateSchema } from '../../lib/zod/user.schema';
import { userInfoSchema } from '../../lib/zod/auth.schema';
import {
  updateUserInfo,
  patchUserPassword,
  patchUserEmail,
  patchUserUsername,
  patchUserStatus,
  patchUserProfilePicture,
} from '../../services/user.service';
import { CustomError } from '../../lib/error/custom.error';

//GET /api/v1/user/
export const getInfo = controllerWrapper(async (req, res) => {
  const user = req.user;

  const userInfo = userInfoSchema.parse(user);
  res.status(200).json(build_response(true, 'User data retrieved successfully!', null, userInfo));
});

//POST /api/v1/user/details
export const updateUserDetails = controllerWrapper(async (req, res) => {
  const user = req.user;

  const { display_name, first_name, last_name, phone_number, profile_picture, bio } = updateUserInfoSchema.parse(req.body);

  const values = {
    display_name,
    first_name: first_name || user.first_name,
    last_name: last_name || user.last_name,
    phone_number: phone_number || user.phone_number,
    profile_picture: profile_picture || user.profile_picture,
    bio: bio || user.bio,
  };

  const userDetails = await updateUserInfo(user.id, values);

  const userInfo = userInfoSchema.parse(userDetails);
  res.status(200).json(build_response(true, 'User data updated successfully!', null, userInfo));
});

//PATCH /api/v1/user/password
export const updateUserPassword = controllerWrapper(async (req, res) => {
  const user = req.user;
  const { old_password, new_password } = passwordUpdateSchema.parse(req.body);

  const passwordUpdated = await patchUserPassword(user.id, old_password, new_password);

  if (!passwordUpdated) throw new CustomError(400, 'Validation Error', 'Password update failed!');

  res.status(200).json(build_response(true, 'Password updated successfully!'));
});

//PATCH /api/v1/user/email
export const updateUserEmail = controllerWrapper(async (req, res) => {
  const user = req.user;
  const { email } = emailUpdateSchema.parse(req.body);

  const emailUpdated = await patchUserEmail(user.id, email);

  if (!emailUpdated) throw new CustomError(400, 'Validation Error', 'Email update failed!');

  res.status(200).json(build_response(true, 'Email updated successfully!'));
});

//PATCH /api/v1/user/username
export const updateUserUsername = controllerWrapper(async (req, res) => {
  const user = req.user;
  const { username } = usernameUpdateSchema.parse(req.body);

  const usernameUpdated = await patchUserUsername(user.id, username);

  if (!usernameUpdated) throw new CustomError(400, 'Validation Error', 'Username update failed!');

  res.status(200).json(build_response(true, 'Username updated successfully!'));
});

//PATCH /api/v1/user/status
export const updateUserStatus = controllerWrapper(async (req, res) => {
  const user = req.user;
  const { status } = statusUpdateSchema.parse(req.body);

  const statusUpdated = await patchUserStatus(user.id, status);

  if (!statusUpdated) throw new CustomError(400, 'Validation Error', 'Status update failed!');

  res.status(200).json(build_response(true, 'Status updated successfully!'));
});

//PATCH /api/v1/user/profile-picture
export const updateUserProfilePicture = controllerWrapper(async (req, res) => {
  console.log(req.file);
  if (req.file) await patchUserProfilePicture(req.user.id, req.file.path);
  res.status(200).json(build_response(true, 'Profile picture updated successfully!'));
});
