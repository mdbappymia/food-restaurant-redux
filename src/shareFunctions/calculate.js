export const calculate = (cart) => {
  let total = 0;
  for (let item of cart) {
    total = total + item.price;
  }
  return total;
};
