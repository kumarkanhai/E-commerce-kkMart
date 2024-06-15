import React from "react";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <>
      <div className="mt-[14vh] mx-auto h-[70vh] container shadow-lg mb-3 p-4 rounded-md flex justify-center items-center flex-col bg-[#f0f6f0] ">
        <img
          src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          alt="cart"
          className="object-scale-down w-[300px] rounded-md "
        />
        <h2 className="text-3xl font-semibold font-sans italic mt-4">
          Your Cart is Currently Empty .
        </h2>
        <div className="flex items-center gap-6 mt-6 ">
        <Link to='/'>
          <button className="px-2 py-1 transition ease-in duration-200 uppercase rounded hover:bg-gray-800 hover:text-white border mb-0 font-semibold bg-[#4646da] text-white border-gray-900 focus:outline-none cursor-pointer">
            Go to Homepage
          </button>
          </Link>
          <Link to='/login'>
          <button className="px-10 py-1 transition ease-in duration-200 uppercase rounded hover:bg-gray-800 hover:text-white border mb-0 font-bold bg-[#4646da] text-white border-gray-900 focus:outline-none cursor-pointer">
            Login
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartEmpty;
