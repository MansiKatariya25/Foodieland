import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex justify-between w-[100vw] items-center p-4 border border-b-[#0000001A]">
      <Link to="/"><h2 className="text-3xl font-Lobster w-[20%] p-4 cursor-pointer">Foodieland</h2></Link>  
        <ul className="none flex justify-evenly w-[33%] font-Inter ">
          <Link to="/">
            <li className="transition-colors duration-200 hover:border-black hover:border-2 hover:rounded-lg hover:p-1 cursor-pointer">Home</li>
          </Link>
          <Link to="/recipe"><li className="transition-colors duration-200 hover:border-black hover:border-2 hover:rounded-lg hover:p-1 cursor-pointer">Recipes</li></Link>
          <li className="transition-colors duration-200 hover:border-black hover:border-2 hover:rounded-lg hover:p-1 cursor-pointer">Contact</li>
          <li className="transition-colors duration-200 hover:border-black hover:border-2 hover:rounded-lg hover:p-1 cursor-pointer">About Us</li>
        </ul>
        <div className="flex justify-evenly w-[20%]">
          <Link to="/Auth/login"><button className="px-4 py-2 border-none bg-black text-white text-lg rounded-full cursor-pointer">Login</button></Link>
          <img src="/logos/twi.svg" />
          <img src="/logos/ig.svg" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
