/* eslint-disable no-lone-blocks */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCategory,
  setCategoryName,
} from "../../redux/actions/shopAction";
import CategoryFoods from "../CategoryFoods/CategoryFoods";

const ShopByCategory = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.shop.categories);
  useEffect(() => {
    dispatch(fetchAllCategory());
  }, [dispatch]);
  return (
    <div className="py-10 container mx-auto">
      <h1 className="text-4xl text-center">Shop by category</h1>
      <div className="container m-auto">
        <div className=" flex justify-center">
          <select
            onChange={(e) => dispatch(setCategoryName(e.target.value))}
            className="text-pink-500 bg-transparent border border-solid border-pink-500   font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mt-10 ease-linear transition-all duration-150"
          >
            {categories.map((category, i) => (
              <option key={i} value={`${category.strCategory}`}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <CategoryFoods />
      </div>
    </div>
  );
};

export default ShopByCategory;
