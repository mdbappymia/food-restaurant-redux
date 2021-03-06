import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { calculate } from "../../shareFunctions/calculate";
import { ComponentToPrint } from "../ComponentToPrint/ComponentToPrint";

const Checkout = () => {
  const { register, handleSubmit } = useForm();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderData, setOrderData] = useState([]);
  const cart = useSelector((state) => state.shop.cartMeal);
  const user = useSelector((state) => state.userData.user);

  console.log(user);
  const onSubmit = (data) => {
    if (paymentMethod === "rocket") {
      data.bkashNum = "";
    }
    if (paymentMethod === "bkash") {
      data.rocketNum = "";
    }
    setOrderData(data);
    console.log(data);
    if (calculate(cart) > 0) {
      handlePrint();
    }
  };
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="container m-auto min-h-screen">
      <div>
        <h1 className="text-4xl text-center font-bold uppercase my-3 py-3 bg-gray-200 ">
          Fill This form
        </h1>
        <form
          className="w-full text-xl p-2 rounded"
          onSubmit={handleSubmit((data) => onSubmit(data))}
        >
          <div className="flex">
            <input
              required
              className="w-full text-xl p-2 rounded mb-3 mr-3 border"
              {...register("firstName")}
              placeholder="First name"
            />
            <input
              required
              className="w-full text-xl p-2 rounded mb-3 border"
              {...register("lastName")}
              placeholder="Last name"
            />
          </div>
          <input
            required
            type="email"
            className="w-full text-xl p-2 rounded mb-3 border"
            {...register("email")}
            defaultValue={user.email}
            placeholder="example@email.com"
          />
          <input
            required
            className="w-full text-xl p-2 rounded mb-3 border"
            {...register("address")}
            placeholder="Address"
          />
          <input
            required
            className="w-full text-xl p-2 rounded mb-3 border"
            {...register("phone")}
            placeholder="Phone Number"
            type="number"
          />
          <select
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mb-3 lg:w-1/3 text-2xl rounded-lg p-3 border"
          >
            <option value="">Select payment method</option>
            <option value="rocket">Rocket</option>
            <option value="bkash">Bkash</option>
          </select>
          {paymentMethod === "rocket" && (
            <div className=" flex">
              <input
                className="w-full text-xl p-2 rounded mb-3 border"
                {...register("rocketNum")}
                placeholder="Rocket Number"
                type="number"
              />
              <input
                disabled
                className="text-white bg-black text-xl p-2 rounded mb-3 ml-3 border"
                type="text"
                defaultValue={
                  "$" + calculate(cart) + " = " + calculate(cart) * 85 + "TK"
                }
                name=""
                id=""
              />
            </div>
          )}
          {paymentMethod === "bkash" && (
            <div className="flex">
              <input
                className="w-full text-xl p-2 rounded mb-3 border"
                {...register("bkashNum")}
                placeholder="Bkash Number"
                type="number"
              />
              <input
                disabled
                className="text-white bg-black text-xl p-2 rounded mb-3 ml-3 border"
                type="text"
                defaultValue={
                  "$" + calculate(cart) + " = " + calculate(cart) * 85 + "TK"
                }
                name=""
                id=""
              />
            </div>
          )}
          <br />
          <input
            className="bg-indigo-700 text-white font-bold rounded hover:bg-indigo-600 cursor-pointer px-3 py-2"
            type="submit"
          />
        </form>
      </div>
      <div>
        <ReactToPrint content={() => componentRef.current} />
        <div className=" hidden">
          <ComponentToPrint orderData={orderData} ref={componentRef} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
