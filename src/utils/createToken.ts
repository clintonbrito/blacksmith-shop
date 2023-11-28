import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'insiraOSegredoCorreto';

type Token = {
  id: number;
  username: string;
};

const createToken = (payload: Token): string => jwt.sign(payload, SECRET);

export default createToken;