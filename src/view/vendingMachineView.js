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

  renderVendingMachineManage() {
    this.$mainContent.innerHTML = vendingMachineManageTemplate();
  }
}
