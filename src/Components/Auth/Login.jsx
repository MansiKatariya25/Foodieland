import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../../utils/api";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${api}auth/login`, {
        email: email,
        pass: pass,
      });

      if (response.status == 200) {
        console.log(response.data);
        navigate("/");
      }
    } catch (error) {
      if (error.status == 401) {
        alert("invalid password");
      }
      if (error.status == 503) {
        alert(error);
      }
      if (error.status == 404) {
        alert("User does not exist")
      }
    }
  }

  return (
    <>
      <div className="authBg w-full min-h-screen flex flex-col justify-center items-center font-Inter px-4 py-12">
        <div className="bg-white shadow-lg rounded-lg px-6 py-12 w-full max-w-md md:max-w-lg lg:max-w-xl">
          <h1 className="text-3xl font-Lobster text-center p-4">
            Login Now to explore tasty recipe's and foodie's around you!
          </h1>
          <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
            <div className="flex flex-col"></div>
            <form onSubmit={handleLogin}>
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
                    Don't have account
                    <Link to="/auth/signup">
                      <span className="text-blue-400 pl-1 border-blue-400 cursor-pointer hover:border-b-2">
                        {" "}
                        Signup{" "}
                      </span>
                    </Link>
                  </p>
                  <button
                    type="submit"
                    className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  >
                    {" "}
                    Login{" "}
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
export default Login;
