import {} from 'dotenv/config';
import chai from 'chai';

const assert = chai.assert;

describe('Environment', function() {
  it('should have a functioning graphql endpoint ENV variable', function() {
    const graphqlEndpoint = process.env.CHECKYOURREP_URL;
    const mailgunDomain = process.env.MAILGUN_CHECKYOURREP_DOMAIN;
    assert.isDefined(graphqlEndpoint, 'GraphQL ENV variables working');
    assert.isDefined(mailgunDomain, 'Mailgun ENV variables working');
  })
})
