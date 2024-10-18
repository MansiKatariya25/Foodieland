import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex justify-between w-[100vw] items-center p-4 border border-b-[#0000001A]">
        <h2 className="text-3xl font-Lobster w-[20%] p-4">Foodieland</h2>
        <ul className="none flex justify-evenly w-[33%]  font-Inter">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/recipe">
            <li>Recipes</li>
          </Link>
          <li>Contact</li>
          <li>About Us</li>
        </ul>
        <div className="flex justify-evenly w-[20%]">
          <img src="./logos/fb.svg" />
          <img src="./logos/twi.svg" />
          <img src="./logos/ig.svg" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
