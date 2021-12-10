export default class VendingMachineModel {
  constructor() {
    this.products = JSON.parse(localStorage.getItem('products')) || [];
  }

  setProducts(name, price, quantity) {
    this.products.push({
      name,
      price,
      quantity,
    });

    localStorage.setItem('products', JSON.stringify(this.products));
  }
}
