import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMealToCart } from "../../redux/actions/shopAction";

const Meal = ({ meal }) => {
  const {
    strMeal,
    idMeal,
    strArea,
    strCategory,
    strInstructions,
    strMealThumb,
    price = 10,
  } = meal;
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.shop.cartMeal);
  return (
    <div className="bg-white m-2 p-4 rounded-md ">
      <img className=" h-72 w-full" src={strMealThumb} alt="" />
      <div className=" flex justify-between py-4">
        <h1 className=" text-2xl font-bold">{strMeal}</h1>
        <h1 className="text-red-600 font-bold text-xl">&#36;{price}</h1>
      </div>
      <p>Category: {strCategory}</p>
      <p>Area of food: {strArea}</p>
      <p>{strInstructions.slice(0, 300)}</p>
      <div className="text-center my-4">
        {cartItem.find((item) => item.idMeal === idMeal) ? (
          <Link to="/cart">
            <button className="hover:text-white font-bold uppercase px-3 py-2 hover:bg-indigo-500 disabled:bg-gray-400">
              View Cart --&gt;
            </button>
          </Link>
        ) : (
          <button
            onClick={() =>
              dispatch(
                addMealToCart({
                  strMeal,
                  idMeal,
                  strMealThumb,
                  price,
                  strCategory,
                  item: 1,
                })
              )
            }
            className=" bg-indigo-700 text-white font-bold uppercase px-3 py-2 hover:bg-indigo-500 disabled:bg-gray-400"
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Meal;
