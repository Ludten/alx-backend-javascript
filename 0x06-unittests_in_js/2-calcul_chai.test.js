const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

const { expect } = chai;

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('no pointer', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it('pointer', () => {
      expect(calculateNumber('SUM', 1.0, 3.0)).to.equal(4);
    });
    it('round-up a', () => {
      expect(calculateNumber('SUM', 1.6, 3)).to.equal(5);
    });
    it('round-down a', () => {
      expect(calculateNumber('SUM', 1.4, 3)).to.equal(4);
    });
    it('round-up b', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
    it('round-down b', () => {
      expect(calculateNumber('SUM', 1.2, 3.4)).to.equal(4);
    });
    it('round-up both', () => {
      expect(calculateNumber('SUM', 1.99999, 3.99999)).to.equal(6);
    });
  });
  describe('SUBTRACT', () => {
    it('no pointer', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });
    it('pointer', () => {
      expect(calculateNumber('SUBTRACT', 1.0, 3.0)).to.equal(-2);
    });
    it('round-up a', () => {
      expect(calculateNumber('SUBTRACT', 1.6, 3)).to.equal(-1);
    });
    it('round-down a', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 3)).to.equal(-2);
    });
    it('round-up b', () => {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });
    it('round-down b', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 3.4)).to.equal(-2);
    });
    it('round-up both', () => {
      expect(calculateNumber('SUBTRACT', 1.99999, 3.99999)).to.equal(-2);
    });
  });
  describe('DIVIDE', () => {
    it('no pointer', () => {
      expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
    });
    it('pointer', () => {
      expect(calculateNumber('DIVIDE', 1.0, 2.0)).to.equal(0.5);
    });
    it('round-up a', () => {
      expect(calculateNumber('DIVIDE', 1.6, 4)).to.equal(0.5);
    });
    it('round-down a', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4)).to.equal(0.25);
    });
    it('round-up b', () => {
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
    });
    it('round-down b', () => {
      expect(calculateNumber('DIVIDE', 1.2, 4.4)).to.equal(0.25);
    });
    it('round-up both', () => {
      expect(calculateNumber('DIVIDE', 1.99999, 3.99999)).to.equal(0.5);
    });
    it('zero a', () => {
      expect(calculateNumber('DIVIDE', 0, 3.99999)).to.equal(0);
    });
    it('zero b', () => {
      expect(calculateNumber('DIVIDE', 2.5, 0.4)).to.equal('Error');
    });
  });
  describe('others', () => {
    it('others', () => {
      expect(calculateNumber('MULTIPLY', 2.5, 2)).to.equal(undefined);
    });
  });
});
