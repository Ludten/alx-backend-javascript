const util = require('util');

export default class Airport {
  constructor(name, code) {
    if (typeof (code) !== 'string') {
      throw new TypeError('Code must be a string');
    } else {
      this._code = code;
    }

    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }
  }

  get code() {
    return this._code;
  }

  set code(val) {
    if (typeof (val) !== 'string') {
      throw new TypeError('Code must be a string');
    } else {
      this._code = val;
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

  // eslint-disable-next-line no-unused-vars
  [util.inspect.custom](depth, options) {
    return `${this.constructor.name} [${this._code}] ${JSON.stringify(this)}`;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
