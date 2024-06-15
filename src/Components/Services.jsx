import React from "react";
import { FaShippingFast } from "react-icons/fa"
import { MdProductionQuantityLimits } from "react-icons/md"
import { TbTruckReturn } from "react-icons/tb"
import { MdPayment } from "react-icons/md"

const Service = () => {
  return (
    <>
      <div className="flex flex-wrap gap-10 mx-auto justify-center pt-11 mb-4">

        <div className="bg-[red] flex flex-col  items-center w-[200px] rounded text-white py-3 px-4  hover:scale-110 transition duration-500">
            <FaShippingFast size={30}/>
            <p className="text-xl pt-2">Free Shipping</p>
        </div>

        <div className="bg-[red] flex flex-col  items-center w-[200px] rounded text-white py-3  px-4 hover:scale-110 transition duration-500">
            <MdProductionQuantityLimits size={30}/>
            <p className="text-xl pt-2">Authentic Products</p>
        </div>

        <div className="bg-[red] flex flex-col  items-center w-[200px] rounded text-white py-3 px-4 hover:scale-110 transition duration-500">
            <TbTruckReturn size={30}/>
            <p className="text-xl pt-2">Easy Returns</p>
        </div>

        <div className="bg-[red] flex flex-col  items-center w-[200px] rounded text-white py-3 px-4 hover:scale-110 transition duration-500">
            <MdPayment size={30}/>
            <p className="text-xl pt-2">Secure Payments</p>
        </div>

      </div>
    </>
  );
};

export default Service;
