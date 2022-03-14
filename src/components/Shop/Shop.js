import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShopData, searchMealText } from "../../redux/actions/shopAction";
import Meal from "../Meal/Meal";

const Shop = () => {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.shop.meals);
  const searchText = useSelector((state) => state.shop.searchText);

  useEffect(() => {
    dispatch(fetchShopData(searchText));
  }, [dispatch, searchText]);
  return (
    <div id="shop" className="container m-auto min-h-screen">
      <h1 className=" text-center text-4xl font-bold bg-gray-200 hover:bg-gray-400 my-5 py-3 uppercase">
        Meals
      </h1>
      <div className="relative lg:w-1/2 w-full">
        <input
          value={searchText}
          onChange={(e) => dispatch(searchMealText(e.target.value))}
          className=" p-2 text-xl text-black w-full border"
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
      {meals?.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal} />
          ))}
        </div>
      ) : (
        <h1 className="text-center font-bold  text-4xl my-5">No Food Found</h1>
      )}
      <a
        href="#shop"
        className="sticky w-20 bg-black text-white hover:opacity-100 opacity-50 p-5 flex justify-center items-center text-4xl font-bold ml-auto bottom-5"
      >
        <p> &#8593;</p>
      </a>
    </div>
  );
};

export default Shop;
