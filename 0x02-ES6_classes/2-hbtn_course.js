export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }

    if (typeof (length) !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = length;
    }

    if (Array.isArray(students) && students.every((i) => typeof i === 'string')) {
      this._students = students;
    } else {
      throw new TypeError('students must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof (val) !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = val;
    }
  }

  get length() {
    return this._length;
  }

  set length(val) {
    if (typeof (val) !== 'string') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = val;
    }
  }

  get students() {
    return this._students;
  }

  set students(val) {
    if (Array.isArray(val) && val.every((i) => typeof i === 'string')) {
      this._students = val;
    } else {
      throw new TypeError('students must be an array of strings');
    }
  }
}
