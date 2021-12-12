import NUMBER from '../constants/number.js';
import Coin from './coin.js';
import { defaultCoins, defaultProducts, defaultCoinsAmountArrray } from './data.js';

export default class VendingMachineModel {
  constructor() {
    this.products = this.loadProducts() || defaultProducts();
    this.coins = this.loadCoins() || defaultCoins();
    this.userCharge = this.loadUserCharge() || NUMBER.ZERO;
  }

  setProducts(products) {
    this.products = products;

    localStorage.setItem('products', JSON.stringify(this.products));
  }

  addProduct(name, price, quantity) {
    this.products.push({
      name,
      price,
      quantity,
    });
  }

  loadProducts() {
    return JSON.parse(localStorage.getItem('products'));
  }

  setCoins(coins) {
    this.coins = coins;

    localStorage.setItem('coins', JSON.stringify(this.coins));
  }

  loadCoins() {
    const coinsString = JSON.parse(localStorage.getItem('coins'));

    return coinsString ? coinsString.map(({ unit, amount }) => new Coin(unit, amount)) : false;
  }

  setUserCharge(charge) {
    this.addUserCharge(charge);

    localStorage.setItem('userCharge', JSON.stringify(this.userCharge));
  }

  addUserCharge(charge) {
    this.userCharge += Number(charge);
  }

  loadUserCharge() {
    const userCharge = localStorage.getItem('userCharge');

    if (userCharge === 'undefined') {
      return false;
    }

    return JSON.parse(userCharge);
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

  findCoin(coinUnit) {
    return this.coins.find((coin) => coin.unit === coinUnit);
  }

  addAccumulateAmounts() {
    return this.coins.forEach((coin) => coin.addAccumulatedAmount());
  }

  resetAccumulatedAmounts() {
    return this.coins.forEach((coin) => coin.resetAccumulatedAmount());
  }

  findProduct(name) {
    return this.products.find((product) => product.name === name);
  }

  decreaseQuantity(target) {
    let newQuantity;

    this.products
      .filter((product) => product.name === target.name)
      .map((product) => {
        product.quantity -= 1;
        newQuantity = product.quantity;

        return product.quantity;
      });

    return newQuantity;
  }
}
