import { startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';
import Meetup from '../models/Meetup';
import User from '../models/User';

class HommeController {
  async index(req, res) {
    const { page = 1, date } = req.query;
    const offset = (page - 1) * 10;
    const limit = offset + 10;

    if (!date) {
      return res.status(400).json({ error: 'invalid date' });
    }

    const searchDate = Number(date);

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
      ],
    });
    return res.json(meetups);
  }
}

export default new HommeController();
