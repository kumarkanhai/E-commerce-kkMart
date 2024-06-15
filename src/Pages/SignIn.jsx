import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/FirebaseAuth"
import toast from "react-hot-toast";

const SignIn = () => {

  const [userDetails, setUserDetails] = useState({
    username : "",
    email : "",
    password : ""
  });

  const navigateLogin = useNavigate();

  const handleUser = (e) => {
    const {name,value}=e.target;
    setUserDetails({...userDetails,[name]:value})
  }

  const {username,email,password} = userDetails;

  const handleSubmit = () =>
{
  if(!username || !email || !password){
    toast.error("please fill all the field");
  }else{
    
createUserWithEmailAndPassword(auth, email, password)
.then((res)=>{
  const user = res.user;
  updateProfile(user,{
    displayName:username
  })
  navigateLogin('/login')
})
.catch((err)=>toast.error(err.message))
  }
}

  return (
    <>
      <div className="bg-[#317873]  mt-[10vh] h-[18vh] text-4xl font-bold italic px-9 flex items-center text-white">
        <h2>Sign In</h2>
      </div>

      <div className="lg:w-1/3 md:w-1/2 bg-red-900 my-4 flex flex-col mx-auto  w-3/4 rounded-lg py-3">
        <h2 className="text-white font-semibold my-3 text-2xl ml-4 font-serif italic">
          Sign In
        </h2>

        <div className="relative mb-4 mx-3 ">
          <label htmlFor="username" className="leading-7 text-sm text-white">
            Username
          </label>
          <input
          autoComplete="off"
          required
            type="text"
            name="username"
            value={username}
            className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={handleUser}
          />
        </div>

        <div className="relative mb-4 mx-3 ">
          <label htmlFor="email" className="leading-7 text-sm text-white">
            Email
          </label>
          <input
          autoComplete="off"
          required
            type="email"
            name="email"
            value={email}
            className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={handleUser}
          />
        </div>
        <div className="relative mb-4 mx-3">
          <label htmlFor="password" className="leading-7 text-sm text-white">
            Password
          </label>
          <input
          autoComplete="off"
          required
            type="password"
            name="password"
            value={password}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={handleUser}
          />
        </div>

        <button className="text-red-900 bg-white border-0 mx-auto px-3 font-semibold py-2  focus:outline-none hover:bg-red-900 hover:text-white hover:border-2 rounded text-lg"
        onClick={handleSubmit}>
          Signin
        </button>

        <p className="my-2 text-sm text-white mx-3 flex items-center gap-2">
          Already have an account?
          <Link to="/login">
            <span className="text-indigo-500 text-sm cursor-pointer">
              Log in
            </span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignIn;
