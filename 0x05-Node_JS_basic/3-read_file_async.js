const fs = require('fs');

function countStudents(path) {
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
        console.log(`Number of students: ${cslist.length + swlist.length}`);
        console.log(`Number of students in CS: ${cslist.length}. List: ${cslist.join(', ')}`);
        console.log(`Number of students in SWE: ${swlist.length}. List: ${swlist.join(', ')}`);
        resolve();
      }
    });
  });
}

module.exports = countStudents;
