import VendingMachineView from '../view/vendingMachineView.js';
import VendingMachineModel from '../model/vendingMachineModel.js';
import { isValidProductInput } from './validator.js';
import { showError } from '../utils/error.js';
import MESSAGE from '../constants/message.js';
import NUMBER from '../constants/number.js';

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
    this.addProductManageEvents();
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
    this.vendingMachineView.renderVendingMachineManage(
      this.vendingMachineModel.getCoinsAmountArray(),
      this.vendingMachineModel.getTotalMoney()
    );

    this.vendingMachineView.selectVendingMachineManageDOM();

    this.addVendingMachineManageEvents();
  }

  handleCharge(e) {
    e.preventDefault();

    let chargeAmount = this.vendingMachineView.$vendingMachineChargeInput.value;

    let randomCoinUnit;
    while (chargeAmount !== NUMBER.ZERO) {
      randomCoinUnit = MissionUtils.Random.pickNumberInList(Object.values(NUMBER.COIN_UNIT));

      if (chargeAmount >= randomCoinUnit) {
        let targetCoin = this.vendingMachineModel.findCoin(randomCoinUnit);

        targetCoin.accumulateAmount();

        chargeAmount -= randomCoinUnit;
      }
    }

    this.vendingMachineModel.addAccumulateAmounts();
    this.vendingMachineModel.resetAccumulatedAmounts();

    this.vendingMachineModel.coins.map((coin) =>
      this.vendingMachineView.renderVendingMachineCoinAmounts(coin)
    );
    // console.log(this.vendingMachineModel.coins);
  }

  changeToProductManageTab() {
    this.vendingMachineView.renderProductManage(this.vendingMachineModel.products);
    this.addProductManageEvents();
  }

  addProductManageEvents() {
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
