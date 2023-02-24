const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const { expect } = chai;

describe('sendPaymentRequestToApi', () => {
  describe('calculateNumber', () => {
    it('round & sum totalAmount & totalShipping', () => {
      const spy = sinon.spy(Utils, 'calculateNumber');
      sendPaymentRequestToApi(100, 20);
      expect(spy.calledOnce).to.be.true;
      spy.restore();
    });
    it('confirm output', () => {
      const spy = sinon.spy(console, 'log');
      sendPaymentRequestToApi(100, 20);
      expect(spy.calledWith('The total is: 120')).to.be.true;
      spy.restore();
    });
  });
});
