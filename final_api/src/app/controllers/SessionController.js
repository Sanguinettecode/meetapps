import * as yup from 'yup';
import JWT from 'jsonwebtoken';
import authConfig from '../../config/auth';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    const schema = yup.object().shape({
      email: yup
        .string()
        .email()
        .required(),
      password: yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'validation failed' });
    }
    const { email, password } = req.body;
    const userExists = await User.findOne({ where: { email } });
    if (!userExists) {
      return res.status(400).json({ error: 'user not found' });
    }
    if (!(await userExists.checkPass(password))) {
      return res.status(401).json({ error: 'user does not have authoriztion' });
    }
    const { id, name } = userExists;
    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: JWT.sign({ id }, authConfig.AUTH_SECRETE, {
        expiresIn: authConfig.AUTH_EXPIRESIN,
      }),
    });
  }
}

export default new SessionController();
