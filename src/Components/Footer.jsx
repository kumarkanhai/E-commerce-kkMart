import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font bg-black ">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <p className="flex title-font font-bold items-center md:justify-start justify-center text-white hover:text-gray-400">
              <Link to="/">
                <span className="ml-3 text-3xl">
                  KK<span className="text-red-700 italic">Mart</span>
                </span>
              </Link>
            </p>
            <p className="mt-2 text-gray-500 italic">
              An Emerging Enterprise...
            </p>
          </div>

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                <li>
                  <Link to="/">
                    <p className="text-white hover:text-gray-400 cursor-pointer">
                      Home
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/category">
                    <p className="text-white hover:text-gray-400 cursor-pointer">
                      Categories
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/allproducts">
                    <p className="text-white hover:text-gray-400 cursor-pointer">
                      All products
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/aboutus">
                    <p className="text-white hover:text-gray-400 cursor-pointer">
                      About Us
                    </p>
                  </Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                <li>
                  <p className="text-white hover:text-gray-400 cursor-pointer">
                    Terms and Condtion
                  </p>
                </li>
                <li>
                  <p className="text-white hover:text-gray-400 cursor-pointer">
                    Privacy Policy
                  </p>
                </li>
                <li>
                  <p className="text-white hover:text-gray-400 cursor-pointer">
                    Cookies
                  </p>
                </li>
                <li>
                  <p className="text-white hover:text-gray-400 cursor-pointer">
                    Profile
                  </p>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                <li>
                  <p className="text-white hover:text-gray-400 cursor-pointer">
                    Partners
                  </p>
                </li>
                <li>
                  <p className="text-white hover:text-gray-400 cursor-pointer">
                    Become A Seller
                  </p>
                </li>
                <li>
                  <p className="text-white hover:text-gray-400 cursor-pointer">
                    Dealers
                  </p>
                </li>
                <li>
                  <p className="text-white hover:text-gray-400 cursor-pointer">
                    Buy Stocks
                  </p>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                <li>
                  <p className="text-white hover:text-gray-400 cursor-pointer">
                    Customer Care
                  </p>
                </li>
                <li>
                  <Link to="/contactus">
                  <p className="text-white hover:text-gray-400 cursor-pointer">
                    Contact us
                  </p>
                  </Link>
                </li>
                <li>
                  <p className="text-white hover:text-gray-400 cursor-pointer">
                    Carrer
                  </p>
                </li>
                <li>
                  <p className="text-white hover:text-gray-400 cursor-pointer">
                    Call on <span className="underline">1800-111-2222</span>
                  </p>
                </li>
              </nav>
            </div>
          </div>
        </div>

        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © Copyright 2024 - KKMart
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <p className="text-gray-500">
                <FaInstagram size={28} />
              </p>
              <p className="ml-3 text-gray-500">
                <FaFacebook size={28} />
              </p>
              <p className="ml-3 text-gray-500">
                <FaGithub size={28} />
              </p>
              <p className="ml-3 text-gray-500">
                <FaXTwitter size={28} />
              </p>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
