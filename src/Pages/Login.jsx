import { signInWithEmailAndPassword } from "firebase/auth";
import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/FirebaseAuth";
import toast from "react-hot-toast";

const Login = () => {

  const [userDetails, setUseretails] = useState({
    email : "",
    password : ""
  });

  const navigateHome = useNavigate();

  const handleUser = (e) => {
    const {name,value}=e.target;
    setUseretails({...userDetails,[name]:value})
  }

  const {email,password} = userDetails;

  const handleSubmit = (e) =>
    {
      e.preventDefault();
      if(!email || !password){
        alert("please fill all the field");
      }else{
        signInWithEmailAndPassword(auth, email, password)
.then((res)=>{
  navigateHome('/')
})
.catch((err)=>toast.error(err.message))
      }
    }

  return (
    <>
      <div>

      <div className="bg-[#317873] mt-[10vh] h-[18vh] text-4xl font-bold italic px-9 flex items-center text-white">
        <h2>Log In</h2>
      </div>

        <div className="lg:w-1/3 md:w-1/2 bg-red-900 my-4 flex flex-col mx-auto  w-3/4 rounded-lg py-3 mt-8 ">
        <h2 className="text-white font-semibold my-3 text-2xl ml-4 font-serif italic">Log In</h2>
          <div className="relative mb-4 mx-3 ">
            <label htmlFor="email" className="leading-7 text-sm text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={email}
              onChange={handleUser}
            />
          </div>
          <div className="relative mb-4 mx-3">
            <label htmlFor="password" className="leading-7 text-sm text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={password}
              onChange={handleUser}
            />
          </div>
         
          <button onClick={handleSubmit}
          className="text-red-900 bg-white border-0 mx-auto px-3 font-semibold py-2  focus:outline-none hover:bg-red-900 hover:text-white hover:border-2 rounded text-lg">
            Login
          </button>
          
            <p className="my-2 text-sm text-white mx-3 flex items-center gap-2" >
                Don't have an account?
                <Link to="/signin">
                <span className="text-indigo-500 text-sm cursor-pointer">Sign in</span>
                </Link>
            </p>

        </div>
      </div>
    </>
  );
};

export default Login;
