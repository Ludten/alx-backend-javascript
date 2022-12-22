export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) === 'string') { this._name = name; }
    if (typeof (length) === 'number') { this._length = length; }
    if (Array.isArray(students) && students.every((i) => typeof i === 'string')) {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val;
  }

  get length() {
    return this._length;
  }

  set length(val) {
    this._length = val;
  }

  get students() {
    return this._students;
  }

  set students(val) {
    this._students = val;
  }
}
