import { CustomError } from '../lib/error/custom.error';
import { createUser, findUser, generateUserToken, validUserAndPassword } from '../models/user.model';

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
