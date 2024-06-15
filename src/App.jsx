import React,{useState, useEffect} from "react";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProducts from "./Pages/AllProducts";
import Cart from "./Pages/Cart";
import Category from "./Pages/Category";
import AboutUs from "./Pages/AboutUs";
import Login from "./Pages/Login";
import SignIn from "./Pages/SignIn";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/FirebaseAuth";
import SingleProducts from "./Pages/SingleProducts";
import ContactUs from "./Pages/ContactUs";
import { Toaster } from "react-hot-toast";



const App = () => {

  const [userName,setUserName] =  useState("");

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setUserName(user.displayName)
      }else{
        setUserName("")
      }
    })
  },[])

  return (
    <>
      <BrowserRouter>
        <NavBar userName={userName} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category" element={<Category />} />
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/singleproduct/:productid" element={<SingleProducts/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>
        <Toaster/>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
