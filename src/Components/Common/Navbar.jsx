import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

function Navbar() {
  const titleRef = useRef();
  const listRef = useRef();
  const logoRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        x: "-20vh",
      },
      {
        x: "0",
        duration: 1,
        ease: "power1.out",
      }
    );

    gsap.fromTo(
      listRef.current,
      {
        y: "-20vh",
      },
      {
        y: "0",
        duration: 1,
        ease: "power1.out",
      }
    );

    gsap.fromTo(logoRef.current,{
      x:"20vw"
    },{
      x:"0",duration:1,ease:"power1.out"
    })
  }, []);


  return (
    <>
      <div className="flex justify-between w-[100vw] items-center p-4 border border-b-[#0000001A] fixed bg-white z-10">
        <Link to="/">
          <h2
            ref={titleRef}
            className="title text-3xl font-Lobster w-[20%] p-4 cursor-pointer"
          >
            Foodieland
          </h2>
        </Link>
        <ul
          ref={listRef}
          className=" none flex justify-evenly w-[33%] font-Inter "
        >
          <Link to="/">
            <li className="transition-colors duration-200 cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/recipe">
            <li className="transition-colors duration-200 cursor-pointer">
              Recipes
            </li>
          </Link>
          <li className="transition-colors duration-200 cursor-pointer">
            Contact
          </li>
          <li className="transition-colors duration-200 cursor-pointer">
            About Us
          </li>
        </ul>
        <div ref={logoRef} className="flex justify-evenly w-[20%]">
          <Link to="/Auth/login">
            <button className="px-4 py-2 border-none bg-black text-white text-lg rounded-full cursor-pointer">
              Login
            </button>
          </Link>
          <img src="/logos/twi.svg" />
          <img src="/logos/ig.svg" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
