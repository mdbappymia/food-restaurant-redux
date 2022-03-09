export const calculate = (cart) => {
  let total = 0;
  for (let item of cart) {
    const priceByItem = item.price * item.item;
    total = total + priceByItem;
  }
  return total;
};
