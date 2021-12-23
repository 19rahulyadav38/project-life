import React from "react";
import logoImage from "../images/logo.png";
import ladyImage from "../images/lady.png";
import infoImg from "../images/info.png";

import "./LoginPage.css";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="bgHome   w-full h-screen flex flex-col justify-center items-center">
      <div className=" py-2 lg:py-14">
        <div className="flex justify-center lg:py-3 pb-1">
          <img className="w-40 lg:w-48" src={logoImage} alt="this is pic" />
        </div>
        <div className="bg-white mx-6 md:mx-24 lg:mx-40 pt-3 px-4 shadow-xl rounded-lg pb-3">
          <div className="flex justify-end ">
            <img className="w-10" src={infoImg} alt="This is pic" />
          </div>
          <div className="grid lg:gap-4 grid-cols-1 lg:grid-cols-2 px-6 md:px-16 lg:px-24 lg:py-10">
            <div className="flex justify-center">
              <img className="w-80" src={ladyImage} alt="this is pic" />
            </div>
            <div className="">
              <h1 className="logInFont text-3xl font-bold text-pink-500">
                Login
              </h1>
              <form>
                <div className="lg:pt-10 pt-2">
                  <label className="" for="email">
                    <p className="font-bold">Email ID</p>
                  </label>
                  <input
                    className="w-full border rounded-md p-2 lg:mt-2 "
                    placeholder="Enter Email id"
                    type="text"
                    name=""
                    value=""
                  />
                </div>
                <div className="lg:pt-5">
                  <label className="" for="email">
                    <p className="font-bold">Password</p>
                  </label>
                  <input
                    className="w-full border rounded-md p-2 lg:mt-2"
                    placeholder="Password"
                    type="text"
                    name=""
                    value=""
                  />
                </div>
                <p className="text-right">Forgot Password ?</p>
                <Link to="dashboard"> <button
                  type=""
                  className="w-full loginButton  mt-2 py-2 rounded-md text-lg text-white"
                >
                  Login
                </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
