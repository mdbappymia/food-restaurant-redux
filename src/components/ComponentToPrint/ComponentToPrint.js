import React from "react";
import { useSelector } from "react-redux";
import { calculate } from "../../shareFunctions/calculate";

// https://reactjs.org/docs/refs-and-the-dom.html#refs-and-function-components
export const ComponentToPrint = React.forwardRef(({ orderData }, ref) => {
  const { firstName, lastName, phone, bkashNum, rocketNum, address } =
    orderData;
  const cart = useSelector((state) => state.shop.cartMeal);
  return (
    <div ref={ref} className="p-10 bg-gray-100">
      <h1 className="text-3xl">Name:{firstName + " " + lastName}</h1>
      <h1>Total payment: {calculate(cart) * 85} TK</h1>
      <h1>Phone Number:{phone}</h1>
      <h1>Address: {address}</h1>
      {bkashNum && (
        <>
          <h1>Bkash Number: {bkashNum}</h1>
        </>
      )}
      {rocketNum && (
        <>
          <h1>Rocket Number: {rocketNum}</h1>
        </>
      )}
    </div>
  );
});
