import { $ } from './DOMhelper.js';
import {
  addItemTemplate,
  headerTemplate,
  productManageTemplate,
} from './template.js';

export default class VendingMachineView {
  constructor() {
    this.$app = $('#app');
  }

  selectProductMangeDOM() {
    this.$productAddForm = $('#product-add-form');
    this.$productNameInput = $('#product-name-input');
    this.$productPriceInput = $('#product-price-input');
    this.$productQuantityInput = $('#product-quantity-input');
  }

  renderHeader() {
    this.$app.insertAdjacentHTML('afterbegin', headerTemplate());
  }

  renderProductManage() {
    this.$app.insertAdjacentHTML('beforeend', productManageTemplate());
  }

  renderAddedItem(name, value, num) {
    const $productManageTable = $('#product-manage-table');

    $productManageTable.insertAdjacentHTML(
      'beforeend',
      addItemTemplate(name, value, num)
    );
  }
}
