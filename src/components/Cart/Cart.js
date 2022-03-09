import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calculate } from "../../shareFunctions/calculate";
import SingleCartItem from "../SingleCartItem/SingleCartItem";

const Cart = () => {
  const cart = useSelector((state) => state.shop.cartMeal);

  return (
    <div className="container m-auto flex justify-between min-h-screen">
      <div className=" h-36 p-10  bg-white my-3 py-3">
        <h1 className="text-center font-bold text-4xl">
          Total Price: &#36;{calculate(cart)}
        </h1>
        <Link to={`${calculate(cart) > 0 ? "/checkout" : "/"}`}>
          <button className=" bg-indigo-700 px-3 py-2 my-5 inline-block font-bold text-white hover:bg-indigo-500">
            Proceed to checkout
          </button>
        </Link>
      </div>
      <div className="w-2/3">
        {cart.map((cartItem) => (
          <SingleCartItem key={cartItem.idMeal} cartItem={cartItem} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
