export default class Currency {
  constructor(code, name) {
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

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
