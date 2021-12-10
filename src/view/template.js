export const headerTemplate = () => {
  return `
    <h1>🥤자판기🥤</h1>
    <div>
      <button id="product-purchase-menu"> 상품 구매 </button>
      <button id="vending-machine-manage-menu"> 잔돈 충전 </button>
      <button id="product-add-menuu"> 상품 관리 </button>
    </div>
  `;
};

export const productManageTemplate = () => {
  return `
    <h2>상품 추가하기</h2>
    <form id="product-add-form">
      <input type="text" id="product-name-input" />
      <input type="number" id="product-price-input"/>
      <input type="number" id="product-quantity-input" />
      <button id="product-add-button">추가하기</button>
    </form>
    <h2>상품 현황</h2>
    <table>
      <tr class="product-manage-table">
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
      </tr>
    </table>
  `;
};

export const addItemTemplate = (name, price, num) => {
  return `
    <tr class="product-manage-item">
      <th class="product-manage-name">${name}</th>
      <th class="product-manage-price">${price}</th>
      <th class="product-manage-quantity">${num}</th>
    </tr>
  `;
};
