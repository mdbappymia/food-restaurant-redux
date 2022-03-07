import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const { register, handleSubmit } = useForm();
  const [paymentMethod, setPaymentMethod] = useState("");
  const onSubmit = (data) => {
    if (paymentMethod === "rocket") {
      data.bkashNum = "";
    }
    if (paymentMethod === "bkash") {
      data.rocketNum = "";
    }
    console.log(data);
  };
  return (
    <div className="container m-auto ">
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
              className="w-full text-xl p-2 rounded mb-3 mr-3"
              {...register("firstName")}
              placeholder="First name"
            />
            <input
              required
              className="w-full text-xl p-2 rounded mb-3"
              {...register("lastName")}
              placeholder="Last name"
            />
          </div>
          <input
            required
            type="email"
            className="w-full text-xl p-2 rounded mb-3"
            {...register("email")}
            placeholder="example@email.com"
          />
          <input
            required
            className="w-full text-xl p-2 rounded mb-3"
            {...register("address")}
            placeholder="Address"
          />
          <input
            required
            className="w-full text-xl p-2 rounded mb-3"
            {...register("phone")}
            placeholder="Phone Number"
            type="number"
          />
          <select
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mb-3"
          >
            <option value="">Select payment method</option>
            <option value="rocket">Rocket</option>
            <option value="bkash">Bkash</option>
          </select>
          {paymentMethod === "rocket" && (
            <input
              className="w-full text-xl p-2 rounded mb-3"
              {...register("rocketNum")}
              placeholder="Rocket Number"
              type="number"
            />
          )}
          {paymentMethod === "bkash" && (
            <input
              className="w-full text-xl p-2 rounded mb-3"
              {...register("bkashNum")}
              placeholder="Bkash Number"
              type="number"
            />
          )}
          <br />
          <input
            className="bg-indigo-700 text-white font-bold rounded hover:bg-indigo-600 cursor-pointer px-3 py-2"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
