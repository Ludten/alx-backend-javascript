const fs = require('fs');

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(new Error('Cannot load the database'));
      else {
        const db = data.split('\n');
        const cslist = [];
        const swlist = [];

        db.forEach((stud) => {
          const elem = stud.split(',');
          if (elem !== [] && elem !== null) {
            if (elem[3] === 'CS') {
              cslist.push(elem[0]);
            } else if (elem[3] === 'SWE') {
              swlist.push(elem[0]);
            }
          }
        });
        resolve({
          CS: cslist,
          SWE: swlist,
        });
      }
    });
  });
}
