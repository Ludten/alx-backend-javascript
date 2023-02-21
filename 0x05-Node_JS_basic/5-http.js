const app = require('http');
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
        const str = `Number of students: ${cslist.length + swlist.length}\nNumber of students in CS: ${cslist.length}. List: ${cslist.join(', ')}\nNumber of students in SWE: ${swlist.length}. List: ${swlist.join(', ')}`;
        resolve(str);
      }
    });
  });
}

module.exports = app.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    const file = process.argv.length > 2 ? process.argv[2] : '';
    await countStudents(file)
      .then((data) => {
        res.write(data);
      })
      .catch((error) => {
        res.write(error.message);
      });
    res.end();
  }
}).listen(1245);
