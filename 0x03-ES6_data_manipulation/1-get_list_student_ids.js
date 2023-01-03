export default function getListStudentsIds(getListStudents) {
  if (getListStudents instanceof Array) {
    return getListStudents.map((x) => x.id);
  }
  return [];
}
