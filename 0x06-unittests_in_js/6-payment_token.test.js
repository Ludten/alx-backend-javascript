const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

const { expect } = chai;

describe('getPaymentTokenFromAPI', () => {
  it('true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res.data).to.equal('Successful response from the API');
        done();
      }).catch((err) => done(err));
  });
});
