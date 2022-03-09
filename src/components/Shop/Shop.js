import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShopData } from "../../redux/actions/shopAction";
import Meal from "../Meal/Meal";

const Shop = () => {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.shop.meals);
  const searchText = useSelector((state) => state.shop.searchText);
  useEffect(() => {
    dispatch(fetchShopData(searchText));
  }, [dispatch, searchText]);
  return (
    <div className=" container m-auto min-h-screen">
      <h1 className=" text-center text-4xl font-bold bg-gray-200 hover:bg-gray-400 my-5 py-3 uppercase">
        Meals
      </h1>
      {meals?.length > 0 ? (
        <div className="grid grid-cols-3">
          {meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal} />
          ))}
        </div>
      ) : (
        <h1 className="text-center font-bold text-white text-4xl my-5">
          No Food Found
        </h1>
      )}
    </div>
  );
};

export default Shop;
