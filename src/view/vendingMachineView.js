import NUMBER from '../constants/number.js';
import { $ } from './DOMhelper.js';
import {
  addItemTemplate,
  headerTemplate,
  productManageTemplate,
  vendingMachineManageTemplate,
} from './template.js';

export default class VendingMachineView {
  constructor() {
    this.$app = $('#app');
  }

  selectheaderDOM() {
    this.$productAddMenu = $('#product-add-menu');
    this.$vendingMachineManageMenu = $('#vending-machine-manage-menu');
    this.$productPurchaseMenu = $('#product-purchase-menu');
    this.$mainContent = $('#main-content');
  }

  renderHeader() {
    this.$app.insertAdjacentHTML('afterbegin', headerTemplate());
  }

  selectProductManageDOM() {
    this.$productAddForm = $('#product-add-form');
    this.$productNameInput = $('#product-name-input');
    this.$productPriceInput = $('#product-price-input');
    this.$productQuantityInput = $('#product-quantity-input');
  }

  renderProductManage(products) {
    this.$mainContent.innerHTML = productManageTemplate();

    products.map(({ name, price, quantity }) => {
      return this.renderItem(name, price, quantity);
    });
  }

  renderItem(name, value, num) {
    const $productManageTable = $('.product-manage-table');

    $productManageTable.insertAdjacentHTML('afterend', addItemTemplate(name, value, num));
  }

  renderVendingMachineManage(vendingMachinecoinList, vendingMachineTotalMoney) {
    this.$mainContent.innerHTML = vendingMachineManageTemplate(
      vendingMachinecoinList,
      vendingMachineTotalMoney
    );
  }

  selectVendingMachineManageDOM() {
    this.$vendingMachineChargeInput = $('#vending-machine-charge-input');
    this.$vendingMachineChargeForm = $('#vending-machine-charge-form');
    this.$vendingMachineChargeAmount = $('#vending-machine-charge-amount');
    this.$vendingMachineCoin500Quantity = $('#vending-machine-coin-500-quantity');
    this.$vendingMachineCoin100Quantity = $('#vending-machine-coin-100-quantity');
    this.$vendingMachineCoin50Quantity = $('#vending-machine-coin-50-quantity');
    this.$vendingMachineCoin10Quantity = $('#vending-machine-coin-10-quantity');
  }

  renderVendingMachineChargeAmount(amount) {
    this.$vendingMachineChargeAmount.innerHTML = `${amount}원`;
  }

  renderVendingMachineCoinAmounts({ unit, amount }) {
    console.log(unit, amount);
    switch (unit) {
      case NUMBER.COIN_UNIT.FIVE_HUNDRED:
        this.$vendingMachineCoin500Quantity.innerHTML = amount;
        break;
      case NUMBER.COIN_UNIT.ONE_HUNDRED:
        this.$vendingMachineCoin100Quantity.innerHTML = amount;
        break;
      case NUMBER.COIN_UNIT.FIFTY:
        this.$vendingMachineCoin50Quantity.innerHTML = amount;
        break;
      default:
        this.$vendingMachineCoin10Quantity.innerHTML = amount;
        break;
    }
  }
}
