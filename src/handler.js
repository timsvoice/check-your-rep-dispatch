'use strict';
import Mailgun from 'mailgun-js';

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_CHECKYOURREP_DOMAIN;
const mailgun = Mailgun({apiKey: MAILGUN_API_KEY, domain });

module.exports.mailer = {
  send(data) {
    return new Promise((resolve, reject) => {
      const mail = {
        from: 'postmaster@checkyourrep.org',
        to: data.user.email,
        subjec: 'Your Bills',
        text: data.message,
        'o:testmode': data.testmode 
      }
      mailgun.messages().send(mail)
        .then((res) => { resolve(res) })
        .catch((err) => { reject(err) })
    })
  }
}
