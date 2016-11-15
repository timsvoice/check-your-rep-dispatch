"use-strict";

import {} from 'dotenv/config';
import fs from 'fs';

module.exports.config = (env) => {
  if (env === 'DEVELOPMENT') {
    fs.writeFile('./src/config/env.js', `{ MAILGUN_API_KEY: "${process.env.MAILGUN_API_KEY}" }`, (err) => {
      if (err) throw err;
      console.log('saved');
    })
  }
}
