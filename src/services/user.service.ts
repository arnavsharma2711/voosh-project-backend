import { CustomError } from '../lib/error/custom.error';
import {
  createUser,
  findUser,
  findUserViaProvider,
  generateUserToken,
  updateUser,
  updateUserMail,
  updateUserPassword,
  updateUserStatus,
  updateUserUsername,
  validUserAndPassword,
  updateUserProfilePicture,
  userRole,
} from '../models/user.model';

export const createNewUser = async (display_name: string, email: string, password: string) => {
  const existingUser = await findUser(email, 'email');
  if (existingUser) throw new CustomError(409, 'Validation Error', 'User with this email already exists!');

  const createdUser = await createUser(display_name, email, password);
  const { access_token, refresh_token } = await generateUserToken(createdUser);

  return { access_token, refresh_token, userDetails: createdUser };
};

export const validateUserCredentials = async (userIdentifier: string, identifierType: string, userPassword: string) => {
  const validatedUser = await validUserAndPassword(userIdentifier, identifierType, userPassword);
  if (!validatedUser) throw new CustomError(404, 'Validation Error', 'User not found!');

  const { access_token, refresh_token } = await generateUserToken(validatedUser);

  return { access_token, refresh_token, userDetails: validatedUser };
};

export const findUserProvider = async (providerDetails: any) => {
  const userFromProvider = await findUserViaProvider(providerDetails);
  return userFromProvider;
};

export const findUserById = async (userId: string) => {
  const user = await findUser(userId, 'id');
  return user;
};

export const updateUserInfo = async (userId: number, newValues: any) => {
  const updatedUserInfo = await updateUser(userId, newValues);
  return updatedUserInfo;
};

export const patchUserEmail = async (userId: number, newEmail: string) => {
  const updatedUserWithEmail = await updateUserMail(userId, newEmail);
  return updatedUserWithEmail;
};

export const patchUserPassword = async (userId: number, oldPassword: string, newPassword: string) => {
  const updatedUserWithNewPassword = await updateUserPassword(userId, oldPassword, newPassword);
  return updatedUserWithNewPassword;
};

export const patchUserUsername = async (userId: number, newUsername: string) => {
  const updatedUserWithNewUsername = await updateUserUsername(userId, newUsername);
  return updatedUserWithNewUsername;
};

export const patchUserStatus = async (userId: number, newStatus: 'public' | 'private') => {
  const updatedUserWithNewStatus = await updateUserStatus(userId, newStatus);
  return updatedUserWithNewStatus;
};

export const patchUserProfilePicture = async (userId: number, newProfilePicture: string) => {
  const updatedUserWithNewProfilePicture = await updateUserProfilePicture(userId, newProfilePicture);
  return updatedUserWithNewProfilePicture;
};

export const getUserRole = async (userId: number) => {
  const role = await userRole(userId);
  return role;
};
