import NUMBER from '../constants/number.js';

const isOverGivenPrice = (value, givenPrice) => {
  return value >= givenPrice;
};

const isDividedByGivenNum = (value, givenNum) => {
  console.log(value, !(value % givenNum));
  return !(value % givenNum);
};

export const isValidPrice = (value) => {
  console.log(value);
  return (
    isOverGivenPrice(value, NUMBER.PRODUCT_MANAGE.MIN_PRICE) &&
    isDividedByGivenNum(value, NUMBER.PRODUCT_MANAGE.DIVIDE_NUM)
  );
};
