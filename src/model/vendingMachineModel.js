import NUMBER from '../constants/number.js';
import { defaultCoins, defaultProducts, defaultCoinsAmountArrray } from './data.js';

export default class VendingMachineModel {
  constructor() {
    this.products = JSON.parse(localStorage.getItem('products')) || defaultProducts();
    this.coins = JSON.parse(localStorage.getItem('coins')) || defaultCoins();
  }

  setProducts(name, price, quantity) {
    this.products.push({
      name,
      price,
      quantity,
    });

    localStorage.setItem('products', JSON.stringify(this.products));
  }

  setCoins(coins) {
    this.coins = coins;

    localStorage.setItem('coins', JSON.stringify(this.coins));
  }

  getTotalMoney() {
    return Object.values(this.coins).reduce((acc, cur) => {
      const { amount, unit } = cur;
      return acc + amount * unit;
    }, 0);
  }

  getCoinsAmountArray() {
    const coinsAmountArray = defaultCoinsAmountArrray();

    this.coins.forEach(({ unit, amount }) => {
      if (unit === NUMBER.COIN_UNIT.FIVE_HUNDRED) {
        coinsAmountArray[0] = amount;
      }
      if (unit === NUMBER.COIN_UNIT.ONE_HUNDRED) {
        coinsAmountArray[1] = amount;
      }
      if (unit === NUMBER.COIN_UNIT.FIFTY) {
        coinsAmountArray[2] = amount;
      }
      if (unit === NUMBER.COIN_UNIT.TEN) {
        coinsAmountArray[3] = amount;
      }
    });

    return coinsAmountArray;
  }

  get500Coin() {
    return this.coins.find((coin) => coin.unit === NUMBER.COIN_UNIT.FIVE_HUNDRED);
  }

  get100Coin() {
    return this.coins.find((coin) => coin.unit === NUMBER.COIN_UNIT.ONE_HUNDRED);
  }

  get50Coin() {
    return this.coins.find((coin) => coin.unit === NUMBER.COIN_UNIT.FIFTY);
  }

  get10Coin() {
    return this.coins.find((coin) => coin.unit === NUMBER.COIN_UNIT.TEN);
  }

  findCoin(coinUnit) {
    return this.coins.find((coin) => coin.unit === coinUnit);
  }

  addAccumulateAmounts() {
    return this.coins.forEach((coin) => coin.addAccumulatedAmount());
  }

  resetAccumulatedAmounts() {
    return this.coins.forEach((coin) => coin.resetAccumulatedAmount());
  }
}
