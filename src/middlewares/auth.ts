import { Request, Response, NextFunction } from 'express';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;

  if (!user.username || !user.password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }

  next();
};

export default {
  validateLogin,
};
