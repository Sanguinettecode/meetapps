import nodemailer from 'nodemailer';
import emailConfig from '../config/mail';

class Mail {
  constructor() {
    const { host, port, secure, auth } = emailConfig;
    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: auth.user ? auth : null,
    });
  }

  sendMail(message) {
    return this.transporter.sendMail({
      ...emailConfig.default,
      ...message,
    });
  }
}

export default new Mail();
