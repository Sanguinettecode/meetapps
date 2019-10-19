import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';
import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class HommeController {
  async index(req, res) {
    const { page = 1, date } = req.query;
    const offset = (page - 1) * 10;
    const limit = offset + 10;

    if (!date) {
      return res.status(400).json({ error: 'invalid date' });
    }

    const searchDate = parseISO(date);

    const meetups = await Meetup.findAll({
      offset,
      limit,
      where: {
        date: {
          [Op.between]: [startOfDay(searchDate), endOfDay(searchDate)],
        },
      },
      attributes: ['id', 'title', 'description', 'locale', 'date'],
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: File,
          as: 'banner',
          attributes: ['id', 'name', 'path', 'url'],
        },
      ],
    });
    return res.json(meetups);
  }
}

export default new HommeController();
