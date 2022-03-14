import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

import { calculate } from "../../shareFunctions/calculate";

const Header = () => {
  const { logOut } = useFirebase();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const cart = useSelector((state) => state.shop.cartMeal);
  const user = useSelector((state) => state.userData.user);

  return (
    <div className="bg-indigo-500 lg:sticky top-0 z-20 lg:py-0 font-bold text-white">
      <nav className=" block lg:flex container m-auto  justify-between ">
        <div className="w-full relative lg:block flex justify-between lg:w-auto lg:static  text-white lg:border-0 border-b py-3 ">
          <div className="text-2xl font-bold ">
            <Link to="/">MealDB Shop</Link>
          </div>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <div
          className={`${
            navbarOpen ? "block" : "hidden"
          } lg:block ml-2 py-5 lg:py-0`}
        >
          <div className="flex lg:inline-block justify-between">
            <button className="bg-white text-yellow-800 font-bold px-3 py-2 rounded-lg">
              &#36;{calculate(cart)}
            </button>
            <p
              onClick={() => setNavbarOpen(false)}
              className="lg:hidden text-3xl mr-4 rounded-full p-3 bg-red-500"
            >
              X
            </p>
          </div>
          <Link
            className="text-xl block my-4 lg:my-2  lg:inline-block mx-2 active:bg-green-500"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-xl  block my-4 lg:my-2  lg:inline-block mx-2 active:bg-green-500"
            to="/shop"
          >
            Shop
          </Link>

          <Link
            className="text-xl  block my-4 lg:my-2  lg:inline-block mx-2"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-xl  my-3 lg:my-2  py-4 rounded-md inline-block mx-2 "
            to="/cart"
          >
            <div className=" inline-block relative">
              <i className="fas fa-shopping-cart"></i>
              <p className=" absolute bottom-3 left-4 bg-red-500 p-2 text-xs rounded-full">
                {cart.length}
              </p>
            </div>
          </Link>
          {user.email ? (
            <button
              onClick={logOut}
              className="text-xl  block my-4 lg:my-2  lg:inline-block lg:ml-5 bg-red-500 text-white px-2 font-bold py-2 rounded hover:bg-red-300"
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="text-xl block my-4 lg:my-2  lg:inline-block lg:ml-5 bg-white text-black px-2 font-bold py-2 rounded hover:bg-gray-300">
                Log In
              </button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
