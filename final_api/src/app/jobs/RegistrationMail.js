import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import Mail from '../../lib/nodemailer';

class RegistrationMail {
  get key() {
    return 'RegistrationMail';
  }

  async handle({ data }) {
    const { newregistration, user } = data;
    await Mail.sendMail({
      to: `${newregistration.meetup.user.name} <${newregistration.meetup.user.email}>`,
      subject: `Nova inscrição para o evento ${newregistration.meetup.title}`,
      template: 'registration',
      context: {
        user: newregistration.meetup.user.name,
        evento: newregistration.meetup.title,
        inscrito: user.name,
        data: format(parseISO(newregistration.meetup.date), "dd 'de' MMMM", {
          locale: pt,
        }),
      },
    });
  }
}
export default new RegistrationMail();
