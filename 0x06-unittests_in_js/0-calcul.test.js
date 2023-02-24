const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('no pointer', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('pointer', () => {
    assert.equal(calculateNumber(1.0, 3.0), 4);
  });
  it('round-up a', () => {
    assert.equal(calculateNumber(1.6, 3), 5);
  });
  it('round-down a', () => {
    assert.equal(calculateNumber(1.4, 3), 4);
  });
  it('round-up b', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('round-down b', () => {
    assert.equal(calculateNumber(1.2, 3.4), 4);
  });
  it('round-up both', () => {
    assert.equal(calculateNumber(1.99999, 3.99999), 6);
  });
});
