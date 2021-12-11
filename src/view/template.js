export const headerTemplate = () => {
  return `
    <h1>🥤자판기🥤</h1>
    <div>
    <button id="product-add-menu"> 상품 관리 </button>
    <button id="vending-machine-manage-menu"> 잔돈 충전 </button>
    <button id="product-purchase-menu"> 상품 구매 </button>
    </div>
    <div id="main-content"></div>
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

export const addItemTemplate = (name, price, quantity) => {
  return `
    <tr class="product-manage-item">
      <th class="product-manage-name">${name}</th>
      <th class="product-manage-price">${price}</th>
      <th class="product-manage-quantity">${quantity}</th>
    </tr>
  `;
};

export const vendingMachineManageTemplate = (coins, totalMoney) => {
  return `
    <h2>자판기 동전 충전하기</h2>
    <form id="vending-machine-charge-form">
      <input id="vending-machine-charge-input" type="number" />
      <button id="vending-machine-charge-button">충전하기</button>
    </form>
    <div>보유 금액: <span id="vending-machine-charge-amount">${totalMoney}원</span></div>
    </br>
    <h2>자판기가 보유한 동전</h2>
    <table>
      <tr>
        <th>동전</th>
        <th>개수</th>
      </tr>
      <tr>
        <th>500원</th>
        <th id="vending-machine-coin-500-quantity">${coins[0]}</th>
      </tr>
      <tr>
        <th>100원</th>
        <th id="vending-machine-coin-100-quantity">${coins[1]}</th>
      </tr>
      <tr>
        <th>50원</th>
        <th id="vending-machine-coin-50-quantity">${coins[2]}</th>
      </tr>
      <tr>
        <th>10원</th>
        <th id="vending-machine-coin-10-quantity">${coins[3]}</th>
      </tr>
    </table>
  `;
};

export const productPurchaseMenuTemplate = (products, coins) => {
  return `
    <h2>금액 투입</h2>
    <form>
      <input id="charge-input" type="text" placeholder="투입할 금액" />
      <button id="charge-button">투입하기</button>
    </form>
    <div id="charge-amount">투입한 금액 <span></span><div>
    <br/>
    <h2>구매할 수 있는 상품 현황</h2>
    <table>
      <tr class="product-manage-table">
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
        <th>구매</th>
      </tr>
      ${products.map(({ name, price, quantity }) => {
        return `
          <tr class="product-purchase-item">
            <th class="product-purchase-name" dataset="data-product-name">${name}</th>
            <th class="product-purchase-price" dataset="data-product-price">${price}</th>
            <th class="product-purchase-quantity" dataset="data-product-quantity">${quantity}</th>
            <th class="purchase-button"><button>구매하기</button></th>
          </tr>
        `;
      })}
    </table>
    <br/>
    <h2>잔돈</h2>
    <br/>
    <div><button id="coin-return-button">반환하기</button></div>
    <table>
      <tr>
        <th>동전</th>
        <th>개수</th>
      </tr>
      <tr>
        <th>500원</th>
        <th id="coin-500-quantity">${coins[0]}</th>
      </tr>
      <tr>
        <th>100원</th>
        <th id="coin-100-quantity">${coins[1]}</th>
      </tr>
      <tr>
        <th>50원</th>
        <th id="coin-50-quantity">${coins[2]}</th>
      </tr>
      <tr>
        <th>10원</th>
        <th id="coin-10-quantity">${coins[3]}</th>
      </tr>
    </table>
  `;
};
