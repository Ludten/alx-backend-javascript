const fs = require('fs');
const readline = require('readline');

function countStudents(path) {
  const stream = fs.createReadStream(path);
  stream.on('error', (err) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
  });
  const reader = readline.createInterface({ input: stream });

  const data = [];
  const cslist = [];
  const swlist = [];

  reader.on('line', (row) => {
    data.push(row.split(','));
  });

  reader.on('close', () => {
    data.forEach((elem) => {
      if (elem !== [] && elem !== null) {
        if (elem[3] === 'CS') {
          cslist.push(elem[0]);
        } else if (elem[3] === 'SWE') {
          swlist.push(elem[0]);
        }
      }
    });
    console.log(`Number of students: ${cslist.length + swlist.length}`);
    console.log(`Number of students in CS: ${cslist.length}. ${cslist.join(', ')}`);
    console.log(`Number of students in SWE: ${swlist.length}. ${swlist.join(', ')}`);
  });
}

module.exports = countStudents;
