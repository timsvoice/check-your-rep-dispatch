'use strict';
import Mailgun from 'mailgun-js';
import { config } from './config/config.js';

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_CHECKYOURREP_DOMAIN;
const mailgun = Mailgun({apiKey: MAILGUN_API_KEY, domain });

config("DEVELOPMENT");

module.exports.mailer = {
  send(data) {
    let mail = {};
    if (data != undefined) {
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
    return new Promise((resolve, reject) => {
      mailgun.messages().send(mail)
        .then((res) => { resolve(res) })
        .catch((err) => { reject(err) })
    })
  }
}
