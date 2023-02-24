const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

const { expect } = chai;

describe('sendPaymentRequestToApi', () => {
  let spy;
  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore();
  });
  it('round & sum totalAmount & totalShipping', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('The total is: 120')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
  it('round & sum totalAmount & totalShipping', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledWith('The total is: 20')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
});
