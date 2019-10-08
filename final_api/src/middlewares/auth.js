import { promisify } from 'util';
import JWT from 'jsonwebtoken';
import authConfig from '../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(JWT.verify)(token, authConfig.AUTH_SECRETE);
    req.userId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};
