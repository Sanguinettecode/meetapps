import { isBefore, isEqual, startOfHour, format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import Registration from '../models/Registration';
import User from '../models/User';
import Meetup from '../models/Meetup';
import Mail from '../../lib/nodemailer';

class RegistrationController {
  async index(req, res) {
    const meetups = await Registration.findAll({
      where: { user_id: req.userId },
      include: [
        {
          model: Meetup,
          as: 'meetup',
          attributes: ['id', 'title', 'description', 'locale', 'date'],
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
      where: { user_id: req.userId },
      include: [
        {
          model: Meetup,
          as: 'meetup',
          attributes: ['date'],
        },
      ],
    });

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

    if (
      userRegistrations.find(item => {
        return isEqual(startOfHour(item.meetup.date), startOfHour(meetup.date));
      })
    ) {
      return res
        .status(401)
        .json({ error: 'you are already subscribed on meetup on same hour' });
    }

    if (!meetup) {
      return res.status(400).json({ error: 'meetup is not found' });
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
    await Mail.sendMail({
      to: `${newregistration.meetup.user.name} <${newregistration.meetup.user.email}>`,
      subject: `Nova inscrição para o evento ${newregistration.meetup.title}`,
      template: 'registration',
      context: {
        user: newregistration.meetup.user.name,
        evento: newregistration.meetup.title,
        inscrito: user.name,
        data: format(newregistration.meetup.date, "dd 'de' MMMM", {
          locale: pt,
        }),
      },
    });
    return res.json(newregistration);
  }
}

export default new RegistrationController();
