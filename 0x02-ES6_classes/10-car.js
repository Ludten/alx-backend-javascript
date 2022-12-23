export default class Airport {
  constructor(brand, motor, color) {
    if (typeof (brand) !== 'string') {
      throw new TypeError('Brand must be a string');
    } else {
      this._brand = brand;
    }

    if (typeof (motor) !== 'string') {
      throw new TypeError('Motor must be a string');
    } else {
      this._motor = motor;
    }

    if (typeof (color) !== 'string') {
      throw new TypeError('Color must be a string');
    } else {
      this._color = color;
    }
  }

  get brand() {
    return this._brand;
  }

  set brand(val) {
    if (typeof (val) !== 'string') {
      throw new TypeError('Brand must be a string');
    } else {
      this._brand = val;
    }
  }

  get motor() {
    return this._motor;
  }

  set motor(val) {
    if (typeof (val) !== 'string') {
      throw new TypeError('Motor must be a string');
    } else {
      this._motor = val;
    }
  }

  get color() {
    return this._color;
  }

  set color(val) {
    if (typeof (val) !== 'string') {
      throw new TypeError('Color must be a string');
    } else {
      this._color = val;
    }
  }

  cloneCar() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
}
