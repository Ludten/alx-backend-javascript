function calculateNumber(type, a, b) {
  let res;
  if (type === 'SUM') res = Math.round(a) + Math.round(b);
  else if (type === 'SUBTRACT') res = Math.round(a) - Math.round(b);
  else if (type === 'DIVIDE') {
    if (Math.round(b) === 0) {
      res = 'Error';
    } else {
      res = Math.round(a) / Math.round(b);
    }
  }
  return res;
}

module.exports = calculateNumber;
