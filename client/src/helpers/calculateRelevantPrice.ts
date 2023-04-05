const calculateRelevantPrice = (price: number, discount: number): string => {
  const newPrice = price - price * (discount / 100);

  return newPrice.toFixed(2);
};

export default calculateRelevantPrice;
