import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "pure-react-carousel/dist/react-carousel.es.css";
import { fetchFoodsByCategory } from "../../redux/actions/shopAction";
import "./CategoryFoods.css";
import CategoryFoodModal from "../CategoryFoodModal/CategoryFoodModal";

const CategoryFoods = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const category = useSelector((state) => state.shop.categoryName);
  const categoryFoods = useSelector((state) => state.shop.categoryFoods);
  const [mealId, setMealId] = useState("");
  console.log(categoryFoods);
  useEffect(() => {
    dispatch(fetchFoodsByCategory(category));
  }, [dispatch, category]);
  console.log(mealId);
  return (
    <div>
      {categoryFoods.length > 0 && (
        <CarouselProvider
          naturalSlideWidth={80}
          naturalSlideHeight={100}
          totalSlides={categoryFoods.length}
          visibleSlides={5}
          infinite={true}
        >
          <Slider>
            {categoryFoods.map((food, i) => {
              return (
                <Slide key={i} index={i}>
                  <div className="m-3 food-item rounded-lg">
                    <img
                      className="h-full w-full p-3 rounded-xl"
                      src={food.strMealThumb}
                      alt=""
                    />
                    <h1 className="ml-3">Name: {food.strMeal.slice(0, 20)}</h1>
                    <div className="view-button justify-center items-center">
                      <button
                        onClick={() => {
                          setMealId(food.idMeal);
                          setShowModal(true);
                        }}
                        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        View Item
                      </button>
                    </div>
                  </div>
                </Slide>
              );
            })}
          </Slider>
          <div className="text-center">
            <ButtonBack className="mx-4 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
              &lt; Back
            </ButtonBack>
            <ButtonNext className="mx-4 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
              Next &gt;
            </ButtonNext>
          </div>
        </CarouselProvider>
      )}
      <CategoryFoodModal
        showModal={showModal}
        setShowModal={setShowModal}
        mealId={mealId}
      />
    </div>
  );
};

export default CategoryFoods;
