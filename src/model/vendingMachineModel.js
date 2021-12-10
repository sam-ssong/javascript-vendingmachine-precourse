import { defaultCoins, defaultProducts } from './data.js';

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

  // setCoins()

  getTotalMoney() {
    return Object.values(this.coins).reduce((acc, cur) => {
      const { amount } = cur;
      return acc + amount;
    }, 0);
  }
}
