export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, object) => accumulator + object.id, 0);
}
