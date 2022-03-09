import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMealToCart } from "../../redux/actions/shopAction";

const MealModal = ({ meal, setShowModal, showModal }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.shop.cartMeal);
  const {
    strMeal,
    idMeal,
    strArea,
    strCategory,
    strInstructions,
    strMealThumb,
    price = 10,
  } = meal;
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none shadow-2xl">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="grid grid-cols-2 p-5">
                  <div className="laft">
                    <div
                      id="carouselExampleCaptions"
                      className="carousel slide relative"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner relative w-full overflow-hidden rounded">
                        <div className="carousel-item active relative float-left w-full">
                          <img
                            src={strMealThumb}
                            className="block w-full"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item relative float-left w-full">
                          <img
                            src={strMealThumb}
                            className="block w-full"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item relative float-left w-full">
                          <img
                            src={strMealThumb}
                            className="block w-full"
                            alt="..."
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon inline-block bg-no-repeat"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon inline-block bg-no-repeat"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    {/* carousel end */}
                  </div>
                  <div className="px-4">
                    <h1 className="text-black text-3xl uppercase font-bold my-3 border-b text-center">
                      {strMeal}
                    </h1>
                    <h1 className="text-xl uppercase">
                      Price: <span className="text-red-600">&#36;{price}</span>
                    </h1>

                    <h1>Area: {strArea}</h1>
                    <h1>Category: {strCategory}</h1>
                    <hr />
                    <h1 className=" h-60 overflow-y-scroll">
                      {strInstructions}
                    </h1>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
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
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default MealModal;
