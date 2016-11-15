import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { mailer } from '../handler.js';

chai.use(chaiAsPromised);
const assert = chai.assert;

describe('Handler', function() {
  it('should call the handler and send an email to Mailgun', function() {
    const data = {
      user: { email: 'timsethvoice@gmail.com' },
      message: 'This is an email test',
      testmode: true,
    };
    return assert.eventually.deepPropertyVal(mailer.send(data), 'message', 'Queued. Thank you.');
  })
})
