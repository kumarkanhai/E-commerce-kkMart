import axios from "axios";
import React, { useEffect, useState } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";

const PopularProducts = () => {

    const [popularProducts, setPopularProducts] = useState([]);

    const dispatch = useDispatch();

  useEffect(() => {
    getPopularProducts();
  }, []);

  const getPopularProducts =async() => {
    try{
        let res = await axios('https://dummyjson.com/carts/1');
        setPopularProducts(res.data.products)
    }
    catch(err){
        console.log("Popular Products api not fetched",err);
    }
  }

  const ProductAdd = (items) =>{
    dispatch(add(items));
  }

  return (
    <>
      <div>
        <div className="text-4xl font-semibold mt-10 text-red-900 py-3 rounded-full text-center underline">
          <h2>Popular Products</h2>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-4 mx-auto">
            <div className="flex flex-wrap m-4 ">
            {
                popularProducts.map((items)=>{
                    return(
                        <div
                className="lg:w-1/4 md:w-1/2 p-4 w-full border rounded border-red-900"
                key={items.id}
              >
                <Link className="block relative h-48 rounded overflow-hidden" to={`/singleproduct/${items.id}`}>
                  <img
                    alt="ecommerce"
                    className="object-scale-down object-center w-full h-full block"
                    src={items.thumbnail}
                  />
                </Link>
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
                      <p className="mt-1 text-lg flex items-center"><LiaRupeeSignSolid />{(items.price).toFixed()}</p>
                    </div>
                    <div>
                      <button className="px-2 py-1 transition ease-in duration-200 uppercase rounded hover:bg-gray-800 hover:text-white border mb-0 border-gray-900 focus:outline-none"
                      onClick={()=>ProductAdd(items)}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
                    )
                })
            }
             
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PopularProducts;
