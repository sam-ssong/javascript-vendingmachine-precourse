export const getReturnedCoin = (userCharge, coinsArray) => {
  const coinUseds = coinsArray.map(({ unit, amount }) => {
    let coinUsed = 0;
    while (userCharge >= unit && amount > 0) {
      console.log(unit, amount);
      userCharge -= unit;
      amount -= 1;
      coinUsed += 1;
    }
    return coinUsed;
  });

  return coinUseds;
};
