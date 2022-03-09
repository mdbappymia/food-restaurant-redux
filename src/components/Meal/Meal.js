import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMealToCart } from "../../redux/actions/shopAction";
import MealModal from "../MealModal/MealModal";
import "./Meal.css";

const Meal = ({ meal }) => {
  const [showModal, setShowModal] = React.useState(false);
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
    <>
      <div
        onClick={() => setShowModal(true)}
        className="bg-white m-2 p-4 rounded-md meal-card hover:bg-gray-100 cursor-pointer"
        title="Click to show"
      >
        <img
          className=" h-72 w-full meal-card-image rounded-2xl"
          src={strMealThumb}
          alt=""
        />
        <div className=" flex justify-between py-4">
          <h1 className=" text-2xl font-bold">{strMeal}</h1>
          <h1 className="text-red-600 font-bold text-xl">&#36;{price}</h1>
        </div>
        <p>Category: {strCategory}</p>
        <p>Area of food: {strArea}</p>
        <p>{strInstructions.slice(0, 300)}</p>
        <div className="text-center my-4">
          {cartItem.find((item) => item.idMeal === idMeal) ? (
            <Link to="/cart#">
              <button className="hover:text-white font-bold uppercase px-3 py-2 hover:text-blue-700 disabled:bg-gray-400">
                View Cart --&gt;
              </button>
            </Link>
          ) : (
            <button
              onClick={(event) => {
                event.stopPropagation();
                dispatch(
                  addMealToCart({
                    strMeal,
                    idMeal,
                    strMealThumb,
                    price,
                    strCategory,
                    item: 1,
                  })
                );
              }}
              className=" hover:shadow-lg bg-indigo-700 text-white font-bold uppercase px-3 py-2 hover:bg-indigo-800 disabled:bg-gray-400"
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
      <MealModal
        showModal={showModal}
        setShowModal={setShowModal}
        meal={meal}
      />
    </>
  );
};

export default Meal;
