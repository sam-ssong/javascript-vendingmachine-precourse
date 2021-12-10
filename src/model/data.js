import NUMBER from '../constants/number.js';

export const defaultCoins = () => {
  return {
    coin500: {
      unit: NUMBER.COIN_UNIT.FIVE_HUNDRED,
      amount: NUMBER.VENDING_MACHINE.DEFAULT_COIN_NUM,
    },
    coin100: {
      unit: NUMBER.COIN_UNIT.ONE_HUNDRED,
      amount: NUMBER.VENDING_MACHINE.DEFAULT_COIN_NUM,
    },
    coin50: {
      unit: NUMBER.COIN_UNIT.FIFTY,
      amount: NUMBER.VENDING_MACHINE.DEFAULT_COIN_NUM,
    },
    coin10: {
      unit: NUMBER.COIN_UNIT.TEN,
      amount: NUMBER.VENDING_MACHINE.DEFAULT_COIN_NUM,
    },
  };
};

export const defaultProducts = () => {
  return [];
};
