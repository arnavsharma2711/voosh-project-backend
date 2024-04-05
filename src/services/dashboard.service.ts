import { allUserList } from '../models/user.model';

export const getAllUsers = async (limit: number, offset: number) => {
  const users = await allUserList(limit, offset, 'all');
  return users;
};

export const getAllPublicUsers = async (limit: number, offset: number) => {
  const users = await allUserList(limit, offset, 'public');
  return users;
};
