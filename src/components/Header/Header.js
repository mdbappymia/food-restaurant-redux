import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchMealText } from "../../redux/actions/shopAction";
import { calculate } from "../../shareFunctions/calculate";

const Header = () => {
  const cart = useSelector((state) => state.shop.cartMeal);
  const searchText = useSelector((state) => state.shop.searchText);
  const dispatch = useDispatch();
  return (
    <div className="bg-indigo-700 sticky top-0 z-10">
      <div className="text-white flex flex-row justify-between py-4 container m-auto items-center">
        <div className="text-2xl font-bold">
          <Link to="/">MealDB Shop</Link>
        </div>
        <div className="relative">
          <input
            value={searchText}
            onChange={(e) => dispatch(searchMealText(e.target.value))}
            className=" p-2 text-xl text-black"
            placeholder="Search here"
            type="text"
          />
          <span
            onClick={() => dispatch(searchMealText(""))}
            className=" top-2 text-black right-3 pt-1 rounded-full cursor-pointer hover:text-red-500 absolute block"
          >
            X
          </span>
        </div>
        <div className="nav">
          <button className="bg-white text-yellow-800 font-bold px-3 py-2 rounded-lg">
            &#36;{calculate(cart)}
          </button>
          <Link
            className="text-xl inline-block mx-2 active:bg-green-500"
            to="/"
          >
            Home
          </Link>
          <Link className="text-xl inline-block mx-2" to="/about">
            About
          </Link>
          <Link className="text-xl inline-block mx-2 relative" to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <p className=" absolute bottom-3 left-4 bg-red-500 p-2 text-xs rounded-full">
              {cart.length}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
