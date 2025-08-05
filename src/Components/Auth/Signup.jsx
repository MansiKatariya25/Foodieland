import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../../utils/api";

function Signup() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const useNav = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resp = await axios.post(`${api}auth/signup`, {
        email: email,
        password: pass,
      });

      if (resp.status == 200) {
        console.log(resp.data);
        useNav("/recipe");
      }
    } catch (error) {
      console.log(error);
      if (error.status == 503) {
        alert("User Already Exists");
      }
    }
  };

  return (
    <>
      <div className="authBg w-full min-h-screen flex flex-col justify-center items-center font-Inter px-4 pt-20">
        <div className="bg-white shadow-lg rounded-lg px-6 py-12 w-full max-w-md md:max-w-lg lg:max-w-xl">
          <h1 className="text-3xl font-Lobster text-center p-4">
            Welcome To FoodieLand! Signup Now to explore tasty recipe's and
            foodie's around you!
          </h1>
          <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
            <div className="flex flex-col"></div>
            <form onSubmit={handleSubmit}>
              <div className="mt-4 space-y-6">
                <div className="col-span-full">
                  <label className="block mb-3 text-sm font-medium text-gray-600">
                    {" "}
                    Email{" "}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-full">
                  <label className="block mb-3 text-sm font-medium text-gray-600">
                    {" "}
                    Password{" "}
                  </label>
                  <input
                    type="password"
                    placeholder="******"
                    value={pass}
                    required
                    onChange={(e) => setPass(e.target.value)}
                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-full">
                  <p className="text-sm p-2">
                    Already have account
                    <Link to="/auth/login">
                      <span className="text-blue-400 pl-1 border-blue-400 cursor-pointer hover:border-b-2">
                        {" "}
                        Login{" "}
                      </span>
                    </Link>
                  </p>
                  <button
                    type="submit"
                    className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  >
                    {" "}
                    Signup{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
