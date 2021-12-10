import { $ } from './DOMhelper.js';
import { addItemTemplate, headerTemplate, productManageTemplate } from './template.js';

export default class VendingMachineView {
  constructor() {
    this.$app = $('#app');
  }

  renderHeader() {
    this.$app.insertAdjacentHTML('afterbegin', headerTemplate());
  }

  selectProductMangeDOM() {
    this.$productAddForm = $('#product-add-form');
    this.$productNameInput = $('#product-name-input');
    this.$productPriceInput = $('#product-price-input');
    this.$productQuantityInput = $('#product-quantity-input');
  }

  renderProductManage(products) {
    this.$app.insertAdjacentHTML('beforeend', productManageTemplate());

    products.map(({ name, price, quantity }) => {
      return this.renderItem(name, price, quantity);
    });
  }

  renderItem(name, value, num) {
    const $productManageTable = $('.product-manage-table');

    $productManageTable.insertAdjacentHTML('afterend', addItemTemplate(name, value, num));
  }
}
