export default class VendingMachineModel {
  constructor() {
    this.products = JSON.parse(localStorage.getItem('products')) || [];
  }

  setProducts(name, price, quantity) {
    const productInfo = {
      name,
      price,
      quantity,
    };
    console.log(localStorage.getItem('products'));
    this.products.push(productInfo);
    localStorage.setItem('products', JSON.stringify(this.products));
  }
}
