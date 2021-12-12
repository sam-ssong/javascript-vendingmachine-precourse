import NUMBER from '../constants/number.js';
import MESSAGE from '../constants/message.js';
import { setErrorMessage } from '../utils/error.js';

const isOverGivenPrice = (value, givenPrice) => {
  return value >= givenPrice;
};

export const isDividedByGivenNum = (value, givenNum) => {
  return !(value % givenNum);
};

const isNotEmpty = (value) => {
  return !!value.trim();
};

const isValidProductPrice = (value) => {
  if (
    isNotEmpty(value) &&
    isOverGivenPrice(value, NUMBER.PRODUCT_MANAGE.MIN_PRICE) &&
    isDividedByGivenNum(value, NUMBER.PRODUCT_MANAGE.DIVIDE_NUM)
  )
    return true;

  setErrorMessage(MESSAGE.ERROR.PRODUCT_PRICE);

  return false;
};

const isValidProductQuantity = (value) => {
  if (isNotEmpty(value) && !isNaN(value)) return true;

  setErrorMessage(MESSAGE.ERROR.PRODUCT_QUANTITY);

  return false;
};

const isValidProductName = (value) => {
  if (isNotEmpty(value)) return true;

  setErrorMessage(MESSAGE.ERROR.PRODUCT_NAME);

  return false;
};

export const isValidProductInput = (productName, productPrice, productQuantity) => {
  return (
    isValidProductName(productName) &&
    isValidProductPrice(productPrice) &&
    isValidProductQuantity(productQuantity)
  );
};

export const isValidChargeInput = (value) => {
  if (isNotEmpty(value) && !isNaN(value) && isDividedByGivenNum(value, NUMBER.COIN_UNIT.TEN)) {
    return true;
  }

  setErrorMessage(MESSAGE.ERROR.NOT_ALLOWED_CHARGE_AMOUNT);

  return false;
};

export const isValidQuantity = (productQuantity) => {
  return productQuantity >= 1;
};
