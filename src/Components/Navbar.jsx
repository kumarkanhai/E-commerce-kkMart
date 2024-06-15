import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../Firebase/FirebaseAuth";
import { RxHamburgerMenu } from "react-icons/rx"

const Navbar = ({ userName }) => {
  const items = useSelector((state) => state.cart);

  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("Logout successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <header className="text-gray-600 body-font fixed top-0 w-full z-10 bg-white shadow-md">
        <div className="container mx-auto flex flex-wrap justify-around  p-5 items-center relative">
          <p className="flex title-font font-bold items-center text-gray-900 mb-4 md:mb-0">
            <Link to="/">
              <span className="ml-3 text-2xl md:text-3xl flex items-center">
                KK<span className="text-red-700 italic">Mart</span>
              </span>
            </Link>
          </p>


          <div className="hidden md:block">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center font-medium text-lg justify-center">
            <Link to="/">
              <p className="mr-5 hover:text-gray-900">Home</p>
            </Link>
            <Link to="/allproducts">
              <p className="mr-5 hover:text-gray-900">All Products</p>
            </Link>
            <Link to="/category">
              <p className="mr-5 hover:text-gray-900">Categories</p>
            </Link>
            <Link to="/aboutus">
              <p className="mr-5 hover:text-gray-900">About Us</p>
            </Link>
          </nav>
          </div>
          


          {
            isOpen ? (
              <nav className="absolute top-[13vh] py-[10vh] bg-red-900 w-full flex flex-col text-white justify-center items-center">
            <Link to="/">
              <p onClick={()=>setIsOpen(false)} className="mb-3 text-2xl font-semibold border-b border-white pb-3 w-full">Home</p>
            </Link>
            <Link to="/allproducts">
              <p onClick={()=>setIsOpen(false)} className="mb-3 text-2xl font-semibold border-b border-white pb-3 w-full">All Products</p>
            </Link>
            <Link to="/category">
              <p onClick={()=>setIsOpen(false)} className="mb-3 text-2xl font-semibold border-b border-white pb-3 w-full">Categories</p>
            </Link>
            <Link to="/aboutus">
              <p onClick={()=>setIsOpen(false)} className="text-2xl font-semibold">About Us</p>
            </Link>
          </nav>
            ) : ""
          }
         

          <div className="flex items-center gap-5">
          <button className="block md:hidden" onClick={()=>setIsOpen(!isOpen)}>
              <RxHamburgerMenu size={25}/>
            </button>
            {userName ? (
              <>
                <span>{userName}</span>
                <Link to="/login" className="inline-flex items-center bg-gray-100 border-0 font-medium py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                  <button onClick={handleLogout}>
                    Logout
                  </button>
                </Link>
              </>
            ) : (
              <Link to="/login">
                <button className="inline-flex items-center bg-gray-100 border-0 font-medium py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                  Login
                </button>
              </Link>
            )}

            <Link to="/cart">
              <button className="flex items-center relative">
                <FaShoppingCart size={30} />
                <span className="absolute right-0 border-red-900  top-[-1px] font-semibold bg-white text-orange-700 text-sm rounded-full px-1">{items.length}</span>
              </button>
            </Link>
            
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
