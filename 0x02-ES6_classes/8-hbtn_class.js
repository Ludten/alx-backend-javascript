export default class HolbertonClass {
  constructor(size, location) {
    if (typeof (size) !== 'number') {
      throw new TypeError('Size must be a number');
    } else {
      this._size = size;
    }

    if (typeof (location) !== 'string') {
      throw new TypeError('Location must be a string');
    } else {
      this._location = location;
    }
  }

  get size() {
    return this._size;
  }

  set size(val) {
    if (typeof (val) !== 'number') {
      throw new TypeError('Size must be a number');
    } else {
      this._size = val;
    }
  }

  get location() {
    return this._location;
  }

  set location(val) {
    if (typeof (val) !== 'string') {
      throw new TypeError('location must be a string');
    } else {
      this._location = val;
    }
  }

  valueOf() {
    return `${this._size}`;
  }

  toString() {
    return `${this._location}`;
  }
}
