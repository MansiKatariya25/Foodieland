import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex justify-between w-[100vw] items-center p-4 border border-b-[#0000001A]">
        <h2 className="text-3xl font-Lobster w-[20%] p-4">Foodieland</h2>
        <ul className="none flex justify-evenly w-[33%] font-Inter ">
          <Link to="/">
            <li className="transition-colors duration-200 hover:text-red-400 hover:font-bold">Home</li>
          </Link>
          <li className="transition-colors duration-200 hover:text-red-400 hover:font-bold">Recipes</li>
          <li className="transition-colors duration-200 hover:text-red-400 hover:font-bold">Contact</li>
          <li className="transition-colors duration-200 hover:text-red-400 hover:font-bold">About Us</li>
        </ul>
        <div className="flex justify-evenly w-[20%]">
          <img src="/logos/fb.svg" />
          <img src="/logos/twi.svg" />
          <img src="/logos/ig.svg" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
