import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calculate } from "../../shareFunctions/calculate";
import SingleCartItem from "../SingleCartItem/SingleCartItem";

const Cart = () => {
  const cart = useSelector((state) => state.shop.cartMeal);

  return (
    <div className="container m-auto lg:flex justify-between min-h-screen">
      <div className=" h-36 p-10  bg-white my-3 py-3">
        <h1 className="lg:text-center font-bold text-4xl">
          Total Price: &#36;{calculate(cart)}
        </h1>
        <Link to={`${calculate(cart) > 0 ? "/checkout" : "/"}`}>
          <button className=" bg-indigo-700 px-3 py-2 my-5 inline-block font-bold text-white hover:bg-indigo-500">
            Proceed to checkout
          </button>
        </Link>
      </div>
      <div className="lg:w-2/3">
        {cart.length <= 0 && (
          <Link to="/shop" className="flex lg:block justify-center">
            <p className="text-4xl my-5 bg-green-500 inline-block text-white px-3 py-2 rounded">
              Shop Now
            </p>
          </Link>
        )}
        {cart.map((cartItem) => (
          <SingleCartItem key={cartItem.idMeal} cartItem={cartItem} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
