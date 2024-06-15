import axios from "axios";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [categoryWiseroduct, setCategoryWiseProduct] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const dispatch = useDispatch();

  const productAdd = (item) =>{
    dispatch(add(item));
  }

  useEffect(() => {
    getCaoegories();
  }, []);

  const getCaoegories = async () => {
    try {
      let res = await axios.get("https://dummyjson.com/products/categories");
      setCategory(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (categoryName !== "") {
      getCategoryWiseProduct();
    }
  }, [categoryName]);

  const getCategoryWiseProduct = async () => {
    try {
      let res = await axios.get(
        `https://dummyjson.com/products/category/${categoryName}`
      );
      console.log(res.data.products);
      setCategoryWiseProduct(res.data.products);
    } catch (err) {
      console.log("product categorywise not fetched", err);
    }
  };

  const handleClick = (item) => {
    setCategoryName(item.name);
  };

  return (
    <>
      <div className="bg-[#317873] h-[18vh] mt-[10vh] text-4xl font-bold italic px-9 flex items-center text-white">
        <h2>Categories</h2>
      </div>

      {/* All categories Name */}

      <div className="flex flex-wrap gap-3 my-4 mx-3 justify-center">
        {category
          .filter((filterItem) => {
            return ![
              "Home Decoration",
              "Kitchen Accessories",
              "Mens Shirts",
              "Mens Shoes",
              "Mens Watches",
              "Mobile Accessories",
              "Skin Care",
              "Sports Accessories",
              "Womens Bags",
              "Womens Dresses",
              "Womens Jewellery",
              "Womens Shoes",
              "Womens Watches",
            ].includes(filterItem.name);
          })
          .map((item, index) => {
            return (
              <button
                className="border-2 border-red-900 px-4 py-2 rounded-lg text-white bg-red-900 hover:bg-red-950"
                key={index}
                onClick={() => handleClick(item)}
              >
                {item.name}
              </button>
            );
          })}
      </div>

      {/* categorywise product display */}

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center gap-1">
          {categoryWiseroduct.map((item, index) => {
            return (
              <div
                className="lg:w-1/4 md:w-1/2 p-4 w-full border rounded border-red-900"
                key={index}
              >
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-scale-down object-center w-full h-full block"
                    src={item.images[0]}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {item.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {item.title}
                  </h2>
                  <div className="flex justify-between mt-3">
                    <div>
                      <h3 className="text-black text-xss bg-blue-400 rounded text-center tracking-widest title-font  mb-1">
                        {item.rating}
                      </h3>
                      <p className="mt-1 text-lg flex items-center">
                        <LiaRupeeSignSolid />
                        {item.price}
                      </p>
                    </div>
                    <div>
                      <button className="px-2 py-1 transition ease-in duration-200 uppercase rounded hover:bg-gray-800 hover:text-white border mb-0 border-gray-900 focus:outline-none"
                      onClick={()=>productAdd(item)}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
