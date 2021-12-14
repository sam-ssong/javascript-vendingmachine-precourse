import { $ } from '../../utils/DOMhelper.js';
import { purchaseTabTemplate } from '../template.js';

export default class PurchaseView {
  init() {
    this.$main = $('main');
  }

  renderPurchaseTab(products) {
    this.$main.innerHTML = purchaseTabTemplate(products);
  }
}
