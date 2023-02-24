const request = require('request');
const chai = require('chai');

const { expect } = chai;

describe('Index page', () => {
  it('response', (done) => {
    try {
      request('http://localhost:7865/', (error, response, body) => {
        if (error) throw error;
        expect(body).to.equal('Welcome to the payment system');
        expect(response.statusCode).to.equal(200);
        expect(response.statusMessage).to.equal('OK');
      });
      done();
    } catch (error) {
      done(error);
    }
  });
});
