import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) !== 'number') {
      throw new TypeError('Amount must be a number');
    } else {
      this._amount = amount;
    }

    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be a Currency Object');
    } else {
      this._currency = currency;
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    if (typeof (val) !== 'number') {
      throw new TypeError('Amount must be a number');
    } else {
      this._amount = val;
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(val) {
    if (typeof (val) !== 'string') {
      throw new TypeError('currency must be a Currency Object');
    } else {
      this._currency = val;
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof (amount) !== 'number') {
      throw new TypeError('Amount must be a number');
    }

    if (typeof (conversionRate) !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }

    return amount * conversionRate;
  }
}
