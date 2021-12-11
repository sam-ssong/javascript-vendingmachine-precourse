import NUMBER from '../constants/number.js';
import Coin from './coin.js';

export const defaultCoins = () => {
  return [
    new Coin(NUMBER.COIN_UNIT.FIVE_HUNDRED, NUMBER.VENDING_MACHINE.DEFAULT_COIN_NUM),
    new Coin(NUMBER.COIN_UNIT.ONE_HUNDRED, NUMBER.VENDING_MACHINE.DEFAULT_COIN_NUM),
    new Coin(NUMBER.COIN_UNIT.FIFTY, NUMBER.VENDING_MACHINE.DEFAULT_COIN_NUM),
    new Coin(NUMBER.COIN_UNIT.TEN, NUMBER.VENDING_MACHINE.DEFAULT_COIN_NUM),
  ];
};

export const defaultProducts = () => {
  return [];
};

export const defaultCoinsAmountArrray = () => {
  return Array.from({ length: 4 }, () => NUMBER.VENDING_MACHINE.DEFAULT_COIN_NUM);
};
