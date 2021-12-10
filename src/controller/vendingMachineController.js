import VendingMachineView from '../view/vendingMachineView.js';
import VendingMachineModel from '../model/vendingMachineModel.js';
import { isValidProductInput } from './validator.js';
import { showError } from '../utils/error.js';
import MESSAGE from '../constants/message.js';

export default class VendingMachineController {
  constructor() {
    this.vendingMachineView = new VendingMachineView();
    this.vendingMachineModel = new VendingMachineModel();

    this.init();
  }

  init() {
    this.vendingMachineView.renderHeader();
    this.vendingMachineView.selectheaderDOM();
    this.addHeaderEvents();

    this.vendingMachineView.renderProductManage(this.vendingMachineModel.products);
    this.vendingMachineView.selectProductManageDOM();
    this.addProductMangeEvents();
  }

  handleAddMenu(e) {
    e.preventDefault();

    const productName = this.vendingMachineView.$productNameInput.value;
    const productPrice = this.vendingMachineView.$productPriceInput.value;
    const productQuantity = this.vendingMachineView.$productQuantityInput.value;

    if (isValidProductInput(productName, productPrice, productQuantity)) {
      this.vendingMachineModel.setProducts(productName, productPrice, productQuantity);

      return this.vendingMachineView.renderItem(productName, productPrice, productQuantity);
    }

    return showError(MESSAGE.ERROR.PRODUCT_PRICE);
  }

  changeToVendingMachineManageTab() {
    this.vendingMachineView.renderVendingMachineManage(this.vendingMachineModel.coins);
    this.vendingMachineView.selectVendingMachineManageDOM();
    this.addVendingMachineManageEvents();
    this.vendingMachineView.renderVendingMachineChargeAmount(
      this.vendingMachineModel.getTotalMoney()
    );
  }

  handleCharge(e) {
    e.preventDefault();

    const chargeAmount = this.vendingMachineView.$vendingMachineChargeInput.value;

    console.log(chargeAmount);
  }

  changeToProductManageTab() {
    this.vendingMachineView.renderProductManage(this.vendingMachineModel.products);
    this.addProductMangeEvents();
  }

  addProductMangeEvents() {
    this.vendingMachineView.$productAddForm.addEventListener(
      'submit',
      this.handleAddMenu.bind(this)
    );
  }

  addVendingMachineManageEvents() {
    this.vendingMachineView.$vendingMachineChargeForm.addEventListener(
      'submit',
      this.handleCharge.bind(this)
    );
  }

  addHeaderEvents() {
    this.vendingMachineView.$vendingMachineManageMenu.addEventListener(
      'click',
      this.changeToVendingMachineManageTab.bind(this)
    );
    this.vendingMachineView.$productAddMenu.addEventListener(
      'click',
      this.changeToProductManageTab.bind(this)
    );
  }
}
