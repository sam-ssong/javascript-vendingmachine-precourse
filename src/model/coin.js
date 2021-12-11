export default class Coin {
  constructor(unit, amount) {
    this._unit = unit,
    this._amount = amount
    this._accumulatedAmount = 0;
  }

  get unit() {
    return this._unit;
  }

  get amount() {
    return this._amount;
  }

  get accumulatedAmount() {
    return this._accumulatedAmount;
  }

  set unit(unit) {
    this._unit = unit;
  }

  set amount(amount) {
    this._amount = amount;
  }

  accumulateAmount() {
    this._accumulatedAmount += 1
  }

  resetAccumulatedAmount() {
    this._accumulatedAmount = 0;
  }

  addAccumulatedAmount() {
    this._amount += this._accumulatedAmount
  }
} 