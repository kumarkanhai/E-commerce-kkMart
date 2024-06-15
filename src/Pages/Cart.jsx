import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Store/cartSlice";
import { Link } from "react-router-dom";
import { LiaRupeeSignSolid } from "react-icons/lia";
import ModalSection from "../Components/ModalSection";
import { BiArrowBack } from "react-icons/bi";
import toast from "react-hot-toast";
import CartEmpty from "../Components/cartEmpty";

const Cart = () => {
  const items = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeProduct = (id) => {
    dispatch(remove(id));
    toast.success("Product Removed Successfully")
  };

  console.log(items);

  const getTotalPrice = items.reduce((total, product) => {
    return total + product.price;
  }, 0);

  return (
    <>
    {
      !items.length ? <CartEmpty/>:(
        <div className="container mx-auto mt-[14vh]">
        <div className="flex flex-col shadow-lg md:flex-row  justify-center my-10">
          <div className="w-full md:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{items.length} Items</h2>
            </div>

            <div className="container px-5 py-4 mx-auto">
              <div className="flex flex-wrap justify-center gap-1">
                {
                  items.map((items) => {
                  return (
                    <div
                      className="lg:w-1/4 md:w-1/2 p-4 w-full border rounded border-red-900"
                      key={items.id}
                    >
                      <a className="block relative h-48 rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          className="object-scale-down object-center w-full h-full block"
                          src={items.thumbnail}
                        />
                      </a>
                      <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          {items.category}
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {items.title}
                        </h2>
                        <div className="flex justify-between mt-3">
                          <div>
                            <h3 className="text-black text-xss bg-blue-400 rounded text-center tracking-widest title-font  mb-1">
                              {items.rating}
                            </h3>
                            <p className="mt-1 text-lg flex items-center">
                              <LiaRupeeSignSolid />
                              {items.price.toFixed()}
                            </p>
                          </div>
                          <div>
                            <button
                              className="px-2 py-1 transition ease-in duration-200 uppercase rounded hover:bg-gray-800 hover:text-white border mb-0 border-gray-900 focus:outline-none"
                              onClick={() => removeProduct(items.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

              <Link to="/"
              className=" flex items-center gap-2 font-semibold text-indigo-600 text-sm mx-auto mt-10 cursor-pointer"
            >
                <span><BiArrowBack size={20}/></span>
                <p>Continue Shopping</p>
              </Link>
          </div>

          <div id="summary" className="w-1/2 md:w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {items.length}
              </span>
              <span className="font-semibold text-sm flex items-center">
                <LiaRupeeSignSolid />
                {getTotalPrice.toFixed()}
              </span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - 10.00</option>
              </select>
            </div>

            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span className="flex items-center">
                  <LiaRupeeSignSolid />
                  {(getTotalPrice + 10).toFixed()}
                </span>
              </div>
                <ModalSection/>

            </div>
          </div>
        </div>
      </div>
      )
    }
      
    </>
  );
};

export default Cart;
