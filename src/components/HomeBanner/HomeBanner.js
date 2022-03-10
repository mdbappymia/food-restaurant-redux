import React from "react";
import { Link } from "react-router-dom";
import "./HomeBanner.css";
const HomeBanner = () => {
  return (
    <div className="home-banner">
      <div className="overlay">
        <div className="w-1/2 m-auto flex items-center h-80">
          <div className="left">
            <div className="overflow-hidden banner-left-img">
              <img
                className="h-full w-full hover:scale-105 transition-all"
                src="https://www.upmenu.com/blog/wp-content/uploads/2021/01/food-delivery-apps.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="mx-5">
            <h1 className="uppercase text-white text-5xl font-bold">
              Order your favourite food
            </h1>
            <Link to="/shop">
              <button
                className="mt-5 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                <i className="fas fa-cart-arrow-down"></i> Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
