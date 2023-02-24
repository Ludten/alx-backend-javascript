const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('no pointer', () => {
      assert.equal(calculateNumber('SUM', 1, 3), 4);
    });
    it('pointer', () => {
      assert.equal(calculateNumber('SUM', 1.0, 3.0), 4);
    });
    it('round-up a', () => {
      assert.equal(calculateNumber('SUM', 1.6, 3), 5);
    });
    it('round-down a', () => {
      assert.equal(calculateNumber('SUM', 1.4, 3), 4);
    });
    it('round-up b', () => {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });
    it('round-down b', () => {
      assert.equal(calculateNumber('SUM', 1.2, 3.4), 4);
    });
    it('round-up both', () => {
      assert.equal(calculateNumber('SUM', 1.99999, 3.99999), 6);
    });
  });
  describe('SUBTRACT', () => {
    it('no pointer', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    });
    it('pointer', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.0, 3.0), -2);
    });
    it('round-up a', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.6, 3), -1);
    });
    it('round-down a', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 3), -2);
    });
    it('round-up b', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });
    it('round-down b', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.2, 3.4), -2);
    });
    it('round-up both', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.99999, 3.99999), -2);
    });
  });
  describe('DIVIDE', () => {
    it('no pointer', () => {
      assert.equal(calculateNumber('DIVIDE', 1, 2), 0.5);
    });
    it('pointer', () => {
      assert.equal(calculateNumber('DIVIDE', 1.0, 2.0), 0.5);
    });
    it('round-up a', () => {
      assert.equal(calculateNumber('DIVIDE', 1.6, 4), 0.5);
    });
    it('round-down a', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4), 0.25);
    });
    it('round-up b', () => {
      assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    });
    it('round-down b', () => {
      assert.equal(calculateNumber('DIVIDE', 1.2, 4.4), 0.25);
    });
    it('round-up both', () => {
      assert.equal(calculateNumber('DIVIDE', 1.99999, 3.99999), 0.5);
    });
    it('zero a', () => {
      assert.equal(calculateNumber('DIVIDE', 0, 3.99999), 0);
    });
    it('zero b', () => {
      assert.equal(calculateNumber('DIVIDE', 2.5, 0), 'Error');
    });
  });
});
