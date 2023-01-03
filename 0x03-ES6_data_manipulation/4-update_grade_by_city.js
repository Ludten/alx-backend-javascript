/* eslint-disable no-param-reassign */

export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((obj) => obj.location === city)
    .map((student) => {
      for (const grad of newGrades) {
        if (student.id === grad.studentId) {
          student.grade = grad.grade;
        }
      }

      if (student.grade === undefined) {
        student.grade = 'N/A';
      }
      return student;
    });
}
