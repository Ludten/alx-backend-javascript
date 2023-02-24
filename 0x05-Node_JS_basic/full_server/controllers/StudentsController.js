import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(_request, response) {
    response.status(200);
    const file = process.argv.length > 2 ? process.argv[2] : '';
    await readDatabase(file)
      .then((data) => {
        response.write('This is the list of our students\n');
        const str = `Number of students in CS: ${data.CS.length}. List: ${data.CS.join(', ')}\nNumber of students in SWE: ${data.SWE.length}. List: ${data.SWE.join(', ')}`;
        response.write(str);
      })
      .catch((error) => {
        response.status(500);
        response.write(error.message);
      });
    response.end();
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major === 'CS' || major === 'SWE') {
      const file = process.argv.length > 2 ? process.argv[2] : '';
      await readDatabase(file)
        .then((data) => {
          const str = `List: ${data[major].join(', ')}`;
          response.status(200).send(str);
        })
        .catch((error) => {
          response.status(500).send(error.message);
        });
    } else {
      response.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

export default StudentsController;
module.exports = StudentsController;
