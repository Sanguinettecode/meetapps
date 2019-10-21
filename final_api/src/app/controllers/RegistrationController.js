import { isBefore, isEqual, startOfHour } from 'date-fns';
import Registration from '../models/Registration';
import User from '../models/User';
import File from '../models/File';
import Meetup from '../models/Meetup';
import Queue from '../../lib/queue';
import RegistrationMain from '../jobs/RegistrationMail';

class RegistrationController {
  async index(req, res) {
    const meetups = await Registration.findAll({
      where: { user_id: req.userId, canceled_at: null },
      include: [
        {
          model: Meetup,
          as: 'meetup',
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
        },
      ],
    });
    const sortMeetups = meetups
      .sort((a, b) => a.meetup.date - b.meetup.date)
      .filter(item => !isBefore(item.meetup.date, new Date()));
    return res.json(sortMeetups);
  }

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

    const userRegistrations = await Registration.findAll({
      where: { user_id: req.userId, canceled_at: null },
      include: [
        {
          model: Meetup,
          as: 'meetup',
          attributes: ['date'],
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
        registration =>
          registration.user_id === req.userId && !registration.canceled_at
      )
    ) {
      return res
        .status(401)
        .json({ error: 'you already registered on this meetup' });
    }

    if (
      userRegistrations.find(item => {
        return isEqual(startOfHour(item.meetup.date), startOfHour(meetup.date));
      })
    ) {
      return res
        .status(401)
        .json({ error: 'you are already subscribed on meetup on same hour' });
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
    const user = await User.findByPk(req.userId);

    await Queue.add(RegistrationMain.key, { newregistration, user });

    return res.json(newregistration);
  }

  async delete(req, res) {
    const registration = await Registration.findByPk(req.params.id, {
      include: [
        {
          model: Meetup,
          as: 'meetup',
          attributes: ['id', 'date'],
        },
      ],
    });

    if (!registration) {
      return res.status(400).json({
        error: 'Registration is not found',
      });
    }

    // Verify if user is requester of the appointment
    if (registration && registration.user_id !== req.userId) {
      return res.status(401).json({
        error: 'Only the requester is allow to delete registration',
      });
    }

    registration.canceled_at = new Date();
    await registration.save();

    return res.json(registration);
  }
}

export default new RegistrationController();
