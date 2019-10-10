import * as yup from 'yup';
import { isBefore, parseISO } from 'date-fns';
import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class MeetupController {
  async index(req, res) {
    const meetups = await Meetup.findAll({
      where: {
        user_id: req.userId,
      },
      attributes: ['id', 'title', 'description', 'date', 'locale'],
      include: [
        {
          model: File,
          as: 'banner',
          attributes: ['id', 'name', 'path', 'url'],
        },
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name', 'email'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'name', 'path', 'url'],
            },
          ],
        },
      ],
    });
    return res.json(meetups);
  }

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
    const { date } = req.body;

    const validDate = parseISO(date);
    if (isBefore(validDate, new Date())) {
      return res.status(401).json({ error: 'pass date are not permited' });
    }

    const newMeet = await Meetup.create({
      ...req.body,
      user_id: req.userId,
    });
    return res.json(newMeet);
  }

  async update(req, res) {
    const schema = yup.object().shape({
      title: yup.string(),
      description: yup.string(),
      locale: yup.string(),
      date: yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: ' validation failed' });
    }
    const { meetupId } = req.params;
    const { date } = req.body;

    const validDate = parseISO(date);
    if (isBefore(validDate, new Date())) {
      return res.status(401).json({ error: 'pass date are not permited' });
    }
    const meetup = await Meetup.findByPk(meetupId, {
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name', 'email'],
        },
      ],
    });

    if (meetup && meetup.user_id === req.userId) {
      if (isBefore(meetup.date, new Date())) {
        return res.status(401).json({ error: 'this meetup cannot be edited' });
      }

      const editedmeetup = await meetup.update(req.body);

      res.json(editedmeetup);
    }
    return res.json({ error: 'meetup is not found' });
  }

  async delete(req, res) {
    const { meetupId } = req.params;
    const meetup = await Meetup.findByPk(meetupId);

    if (meetup && meetup.user_id === req.userId) {
      if (isBefore(meetup.date, new Date())) {
        return res
          .status(401)
          .json({ error: 'this meetup has already happened' });
      }

      await meetup.destroy();
      return res.json('Meetup has been deleted');
    }
    return res.status(400).json({ error: 'meetup is not found' });
  }
}

export default new MeetupController();
