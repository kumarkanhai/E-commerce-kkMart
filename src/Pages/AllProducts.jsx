import axios from "axios";
import React, { useEffect, useState } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const AllProducts = () => {

  const dispatch = useDispatch();
  const [allProducts, setAllProducts] = useState([]);
  const[searchProduct, setSearchProduct] = useState("");

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      let res = await axios.get('https://dummyjson.com/products');
      setAllProducts(res.data.products);
      console.log(res.data.products);
    } catch (err) {
      console.log("Product data is not fetched", err);
    }
  };

  const ProductAdd = (items) =>{
    dispatch(add(items));
    toast.success('Product Added to Cart')
  }

  const handleSearchProduct = (e) => {
    setSearchProduct(e.target.value);
  }

  const handleSearch = () => {
    const searchedProduct = allProducts.filter((items)=>{
      return items.title.toLowerCase().includes(searchProduct.toLowerCase());
    })
    setAllProducts(searchedProduct); 
  }
 

 

  return (
    <>
      <div className="bg-[#317873] mt-[10vh] flex items-center h-[18vh] text-4xl font-bold italic p-9 text-white">
        <h2>All Products</h2>
      </div>

        {/* Search Product */}
      <div className="text-center mt-4 w-1/2  mx-auto flex gap-2">
        <input className=" px-3 py-2 border-red-900 border-2 w-3/4 rounded " placeholder="Search product" onChange={handleSearchProduct}
        value={searchProduct} />
        <button className="bg-black text-white px-3 py-2 rounded-lg font-medium transition ease-in duration-200 hover:bg-white hover:text-black hover:border-2 hover:border-black"
        onClick={handleSearch}>Search Product</button>
      </div>

      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-wrap justify-center -m-4">
          {allProducts.map((items) => {
            return (
              <div
                className="lg:w-1/4 md:w-1/2 p-4 w-full rounded"
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
                      <h3 className="text-black text-xs bg-blue-400 rounded text-center tracking-widest title-font  mb-1">
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
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
