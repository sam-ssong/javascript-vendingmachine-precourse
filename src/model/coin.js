export default class Coin {
  constructor(unit, amount) {
    this.unit = unit;
    this.amount = amount;
    this.accumulatedAmount = 0;
  }

  setUnit(unit) {
    this.unit = unit;
  }

  setAmount(amount) {
    this.amount = amount;
  }

  accumulateAmount() {
    this.accumulatedAmount += 1;
  }

  resetAccumulatedAmount() {
    this.accumulatedAmount = 0;
  }

  addAccumulatedAmount() {
    this.amount += this.accumulatedAmount;
  }
}
