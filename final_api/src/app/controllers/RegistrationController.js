import { isBefore, isEqual, startOfHour } from 'date-fns';
import Registration from '../models/Registration';
import User from '../models/User';
import Meetup from '../models/Meetup';

class RegistrationController {
  async store(req, res) {
    const { meetupId } = req.body;

    const meetup = await Meetup.findByPk(meetupId, {
      include: [
        {
          model: Registration,
          as: 'registrations',
        },
      ],
    });
    if (!meetup) {
      return res.status(400).json({ error: 'meetup is not found' });
    }
    if (meetup.user_id === req.userId) {
      return res.status(401).json({ error: 'you are the event organizer' });
    }

    if (
      meetup.registrations.find(
        registration => registration.user_id === req.userId
      )
    ) {
      return res
        .status(401)
        .json({ error: 'you already registered on this meetup' });
    }

    if (isBefore(meetup.date, new Date())) {
      return res
        .status(401)
        .json({ error: 'this meetup has already happened' });
    }

    const registrationData = {
      user_id: req.userId,
      meetup_id: meetupId,
    };
    const { id } = await Registration.create(registrationData);

    const newregistration = await Registration.findByPk(id, {
      attributes: ['id'],
      include: [
        {
          model: Meetup,
          as: 'meetup',
          attributes: ['id', 'title', 'description', 'date', 'locale'],
          include: [
            {
              model: User,
              as: 'user',
              attributes: ['id', 'name', 'email'],
            },
          ],
        },
      ],
    });

    return res.json(newregistration);
  }
}

export default new RegistrationController();
