const getHiddenCard = (cardNumber, starsCount = 4) => {
  const result = `${'*'.repeat(starsCount)}${cardNumber.slice(-4)}`;
  return result;
};

export default getHiddenCard;
