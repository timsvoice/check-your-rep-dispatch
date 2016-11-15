"use-strict";

import {} from 'dotenv/config';
import fs from 'fs';

module.exports.config = () => {
  const keys = `
  module.exports.keys = {
    MAILGUN_API_KEY: "${process.env.MAILGUN_API_KEY}",
    MAILGUN_CHECKYOURREP_DOMAIN: "${process.env.MAILGUN_CHECKYOURREP_DOMAIN}"
  }`
  fs.writeFile('./config/env.js', keys, (err) => {
    if (err) throw err;
    console.log('saved');
  })
}
