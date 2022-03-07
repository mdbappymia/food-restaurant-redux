import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseItem,
  increaseItem,
  removeMealToCart,
} from "../../redux/actions/shopAction";

const SingleCartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { idMeal, strMealThumb, price = 10, item } = cartItem;
  return (
    <div className="flex m-3 border-2 border-white relative bg-white">
      <img className=" w-40 h-40" src={strMealThumb} alt="" />
      <div className="ml-4">
        <div>
          <h1>{cartItem.strMeal}</h1>
          <p>Price: &#36;{price}</p>
          <p>Order Item: {item}</p>
          <div>
            <button
              onClick={() => dispatch(decreaseItem(idMeal))}
              className="bg-red-600 p-3 py-1 text-xl font-bold text-white m-2 hover:bg-red-500 "
            >
              {item === 1 ? "Remove" : "-"}
            </button>
            <button
              onClick={() => dispatch(increaseItem(idMeal))}
              className="bg-green-600 p-3 py-1 text-xl font-bold text-white m-2 hover:bg-green-500"
            >
              +
            </button>
          </div>
        </div>
        <button
          className=" absolute right-5 top-10 bg-red-600 rounded-full p-3 text-white"
          onClick={() => dispatch(removeMealToCart(idMeal))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default SingleCartItem;
