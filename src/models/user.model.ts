import { eq, or } from 'drizzle-orm';
import { users as User } from '../lib/db/schema';
import databaseInstance from '../lib/db';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from '../constants';
import { CustomError } from '../lib/error/custom.error';

const generateDefaultUsername = (name: string) => `${name.toLowerCase().replace(/\s/g, '_')}_${crypto.randomBytes(3).toString('hex')}`;

export const generateUserToken = async (user: any) => {
  const access_token_payload = { id: user.id, display_name: user.display_name, email: user.email, username: user.username };
  const access_token = jwt.sign(access_token_payload, ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
  const refresh_token = jwt.sign({ id: user.id }, REFRESH_TOKEN_SECRET, { expiresIn: '6h' });

  await databaseInstance.update(User).set({ access_token: access_token, refresh_token: refresh_token }).where(eq(User.id, user.id));
  return { access_token, refresh_token };
};

export const findUser = async (identifierValue: string, identifierType: string) => {
  let searchCondition;
  if (identifierType === 'id') {
    searchCondition = eq(User.id, parseInt(identifierValue));
  } else if (identifierType === 'email') {
    searchCondition = eq(User.email, identifierValue);
  } else if (identifierType === 'username') {
    searchCondition = eq(User.username, identifierValue);
  } else if (identifierType === 'phone_number') {
    searchCondition = eq(User.phone_number, identifierValue);
  } else if (identifierType === 'any') {
    searchCondition = or(eq(User.username, identifierValue), eq(User.email, identifierValue), eq(User.phone_number, identifierValue));
  } else throw new CustomError(400, 'Model Error', `Invalid identifier type: ${identifierType}!`);

  const userDetails = await databaseInstance.select().from(User).where(searchCondition).limit(1);
  return userDetails[0];
};

export const createUser = async (display_name: string, email: string, password: string) => {
  const values = {
    display_name: display_name,
    email: email,
    encrypted_password: bcrypt.hashSync(password, 10),
    username: generateDefaultUsername(display_name),
  };

  const newUser = await databaseInstance
    .insert(User)
    .values(values)
    .returning({ id: User.id, display_name: User.display_name, email: User.email, username: User.username });

  return newUser[0];
};

export const validUserAndPassword = async (identifier: string, identifierType: string, password: string) => {
  const user = await findUser(identifier, identifierType);
  if (!user) throw new CustomError(404, 'Authentication Error', 'Invalid credentials!');

  const passwordMatch = user.encrypted_password ? bcrypt.compareSync(password, user.encrypted_password) : false;
  if (!passwordMatch) throw new CustomError(401, 'Authentication Error', 'Invalid credentials!');

  return user;
};
