const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

const { expect } = chai;

describe('sendPaymentRequestToApi', () => {
  describe('calculateNumber', () => {
    it('round & sum totalAmount & totalShipping', () => {
      const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
      stub.withArgs('SUM', 100, 20).returns(10);
      const spy = sinon.spy(console, 'log');
      sendPaymentRequestToApi(100, 20);
      expect(stub.calledWith('SUM', 100, 20)).to.be.true;
      expect(spy.calledWith('The total is: 10')).to.be.true;
      expect(stub.calledOnce).to.be.true;
      spy.restore();
    });
  });
});
