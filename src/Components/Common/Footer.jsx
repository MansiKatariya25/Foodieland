import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="font-Inter">
      {/* CTA block */}
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="flex flex-col items-center bg-[#E7FAFE] rounded-3xl p-6 sm:p-8 lg:p-12 w-full max-w-6xl overflow-hidden"
        >
          {/* Heading */}
          <p className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center my-4">
            Deliciousness to your inbox
          </p>

          {/* Sub-text */}
          <p className="text-base sm:text-lg lg:text-xl text-center text-slate-400 max-w-xl lg:w-[60%]">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua enim ad minim
          </p>

          {/* Email row */}
          <div className="relative flex flex-col sm:flex-row items-center justify-center w-full max-w-3xl mt-8">
            {/* Left image */}
            <img
              src="/logos/left.png"
              alt=""
              className="hidden lg:block absolute -left-[9vw] xl:-left-[13vw] w-[200px] xl:w-[300px] h-auto"
            />

            {/* Input */}
            <div className="bg-white rounded-xl p-2 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
              <div className="flex flex-col sm:flex-row items-stretch gap-2">
                <input
                  type="email"
                  placeholder="Your email address..."
                  className="flex-1 min-w-0 p-3 rounded-lg outline-none"
                />
                <button className="bg-black text-white px-4 py-3 rounded-lg whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Right image */}
            <img
              src="/logos/right.png"
              alt=""
              className="hidden lg:block absolute -right-24 xl:-right-48 w-[200px] xl:w-[300px] h-auto"
            />
          </div>
        </div>
      </div>

      {/* Bottom links */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 px-6 py-12 md:px-24">
        <div className="w-full lg:w-1/3">
          <p className="text-3xl font-Lobster mb-2">Foodieland.</p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetuipisicing elit,
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <li>Recipes</li>
          <li>Contact</li>
          <li>About Us</li>
        </ul>
      </div>

      {/* Divider */}
      <hr className="w-11/12 mx-auto" />

      {/* Copyright + Socials */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-11/12 mx-auto py-6 gap-4">
        <p className="text-sm text-center sm:text-left">
          © 2020 Flowbase. Powered by Webflow
        </p>
        <div className="flex gap-4">
          <img src="/logos/fb.svg" width={10} alt="fb" />
          <img src="/logos/twi.svg" width={20} alt="tw" />
          <img src="/logos/ig.svg" width={20} alt="ig" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;