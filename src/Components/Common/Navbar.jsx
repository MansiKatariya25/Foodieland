import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

function Navbar() {
  const titleRef = useRef();
  const listRef = useRef();
  const logoRef = useRef();
  const mobileMenuRef = useRef();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Only animate on desktop/tablet screens
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
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

      gsap.fromTo(logoRef.current, {
        x: "20vw"
      }, {
        x: "0", 
        duration: 1, 
        ease: "power1.out"
      });
    });

    return () => mm.revert();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="flex justify-between w-full items-center p-4 md:px-6 lg:px-8 border border-b-[#0000001A] fixed bg-white z-20 top-0 left-0">
        {/* Logo/Title */}
        <Link to="/" className="flex-shrink-0">
          <h2
            ref={titleRef}
            className="title text-xl sm:text-2xl md:text-3xl font-Lobster cursor-pointer"
          >
            Foodieland
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <ul
          ref={listRef}
          className="hidden md:flex justify-evenly items-center space-x-6 lg:space-x-8 font-Inter"
        >
          <Link to="/">
            <li className="transition-colors duration-200 cursor-pointer hover:text-gray-600 text-sm lg:text-base">
              Home
            </li>
          </Link>
          <Link to="/recipe">
            <li className="transition-colors duration-200 cursor-pointer hover:text-gray-600 text-sm lg:text-base">
              Recipes
            </li>
          </Link>
          <li className="transition-colors duration-200 cursor-pointer hover:text-gray-600 text-sm lg:text-base">
            Contact
          </li>
          <li className="transition-colors duration-200 cursor-pointer hover:text-gray-600 text-sm lg:text-base">
            About Us
          </li>
        </ul>

        {/* Desktop Social & Login */}
        <div ref={logoRef} className="hidden md:flex items-center space-x-3 lg:space-x-4 flex-shrink-0">
          <Link to="/Auth/login">
            <button className="px-4 py-2 border-none bg-black text-white text-sm lg:text-base rounded-lg cursor-pointer hover:bg-gray-800 transition-colors duration-200">
              Login
            </button>
          </Link>
          <img src="/logos/twi.svg" className="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:opacity-75 transition-opacity" alt="Twitter" />
          <img src="/logos/ig.svg" className="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:opacity-75 transition-opacity" alt="Instagram" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-10 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {/* Mobile Navigation Links */}
          <ul className="flex flex-col space-y-6 font-Inter text-lg">
            <Link to="/" onClick={toggleMobileMenu}>
              <li className="transition-colors duration-200 cursor-pointer hover:text-gray-600 py-2 border-b border-gray-100">
                Home
              </li>
            </Link>
            <Link to="/recipe" onClick={toggleMobileMenu}>
              <li className="transition-colors duration-200 cursor-pointer hover:text-gray-600 py-2 border-b border-gray-100">
                Recipes
              </li>
            </Link>
            <li className="transition-colors duration-200 cursor-pointer hover:text-gray-600 py-2 border-b border-gray-100" onClick={toggleMobileMenu}>
              Contact
            </li>
            <li className="transition-colors duration-200 cursor-pointer hover:text-gray-600 py-2 border-b border-gray-100" onClick={toggleMobileMenu}>
              About Us
            </li>
          </ul>

          {/* Mobile Login & Social */}
          <div className="mt-8 flex flex-col space-y-4">
            <Link to="/Auth/login" onClick={toggleMobileMenu}>
              <button className="w-full py-3 border-none bg-black text-white text-lg rounded-lg cursor-pointer hover:bg-gray-800 transition-colors duration-200">
                Login
              </button>
            </Link>
            <div className="flex justify-center gap-4 mt-6">
              <img src="/logos/twi.svg" className="w-6 h-6 cursor-pointer hover:opacity-75 transition-opacity" alt="Twitter" />
              <img src="/logos/ig.svg" className="w-6 h-6 cursor-pointer hover:opacity-75 transition-opacity" alt="Instagram" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;