import { Request, Response } from 'express';
import loginService from '../services/login.service';

const login = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }

  const token = await loginService.loginUser({ username, password });

  if (!token) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  return res.status(200).json({ token });
};

export default {
  login,
};