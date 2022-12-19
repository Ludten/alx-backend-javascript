export default function createIteratorObject(report) {
  const arr = [];
  const obj = report.allEmployees;

  for (const item in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, item)) {
      for (const elem of obj[`${item}`]) {
        arr.push(elem);
      }
    }
  }

  return arr;
}
