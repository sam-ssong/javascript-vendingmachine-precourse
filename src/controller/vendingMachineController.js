import VendingMachineView from '../view/vendingMachineView.js';
import VendingMachineModel from '../model/vendingMachineModel.js';
import { isValidPrice } from './validator.js';
import { showError } from '../utils/error.js';
import MESSAGE from '../constants/message.js';

export default class VendingMachineController {
  constructor() {
    this.vendingMachineView = new VendingMachineView();
    this.vendingMachineModel = new VendingMachineModel();

    this.init();
    this.addEvents();
  }

  init() {
    this.vendingMachineView.renderHeader();
    this.vendingMachineView.renderProductManage(this.vendingMachineModel.products);

    this.vendingMachineView.selectProductMangeDOM();
  }

  handleAddMenu(e) {
    e.preventDefault();

    const productName = this.vendingMachineView.$productNameInput.value;
    const productPrice = this.vendingMachineView.$productPriceInput.value;
    const productQuantity = this.vendingMachineView.$productQuantityInput.value;

    if (isValidPrice(productPrice)) {
      this.vendingMachineModel.setProducts(productName, productPrice, productQuantity);

      return this.vendingMachineView.renderItem(productName, productPrice, productQuantity);
    }

    return showError(MESSAGE.ERROR.PRODUCT_PRICE);
  }

  addEvents() {
    this.vendingMachineView.$productAddForm.addEventListener(
      'submit',
      this.handleAddMenu.bind(this)
    );
  }
}
