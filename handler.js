'use strict';
import Mailgun from 'mailgun-js';
import {} from 'dotenv/config';

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_CHECKYOURREP_DOMAIN;
const mailgun = Mailgun({apiKey: MAILGUN_API_KEY, domain });

module.exports.mailer = (event, context, callback) => {
    const data = event.body;
    let mail = {};
    if (data != null) {
      mail = {
        from: 'postmaster@checkyourrep.org',
        to: data.user.email,
        subjec: 'Your Bills',
        text: data.message,
        'o:testmode': data.testmode
      }
    } else {
      mail = {
        from: 'postmaster@checkyourrep.org',
        to: 'timsethvoice@gmail.com',
        subjec: 'Your Bills',
        text: 'Test mail',
        'o:testmode': true
      }
    }
    mailgun.messages().send(mail)
      .then((res) => {
        callback(null, res)
      })
      .catch((err) => { throw err; })
  }
