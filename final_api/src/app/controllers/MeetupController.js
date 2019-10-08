import * as yup from 'yup';
import Meetup from '../models/Meetup';

class MeetupController {
  async store(req, res) {
    const schema = yup.object().shape({
      title: yup.string().required(),
      description: yup.string().required(),
      locale: yup.string().required(),
      date: yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: ' validation failed' });
    }

    const { id, title, description, locale, date } = await Meetup.create({
      ...req.body,
      user_id: req.userId,
    });
    return res.json({ id, title, description, locale, date });
  }
}

export default new MeetupController();
