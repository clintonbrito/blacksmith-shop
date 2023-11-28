import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { Login } from '../types/Login';
import createToken from '../utils/createToken';

const loginUser = async (login: Login): Promise<string | null > => {
  const user = await UserModel.findOne({ where: { username: login.username } });

  if (!user || !bcrypt.compareSync(login.password, user.dataValues.password)) {
    return null;
  }

  const { id, username } = user.dataValues;
  const token = createToken({ id, username });

  return token;
};

export default {
  loginUser,
};
