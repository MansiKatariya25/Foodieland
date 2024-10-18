import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full h-[60vh] font-Inter flex justify-center ">
        <div className=" flex flex-col items-center justify-evenly bg-[#E7FAFE] rounded-3xl p-4 overflow-hidden">
          <p className="text-6xl font-bold my-4">Deliciousness to your inbox</p>
          <p className="text-xl w-[60%] text-center text-slate-400">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>

          <div className="flex items-center">
            <img
              src="./logos/left.png"
              className="w-[300px] h-[250px] -translate-x-[9vw] translate-y-[4vh]"
            />

            <div className="bg-white p-4 w-[30vw] rounded-xl h-24 flex items-center justify-between">
              <input
                type="email"
                placeholder="Your email address..."
                className="p-4 rounded-xl outline-none"
              />
              <button className="bg-black text-white p-4 rounded-xl">
                Subscribe
              </button>
            </div>

            <img
              src="./logos/right.png"
              className="w-[300px] h-[270px] translate-x-[9vw] translate-y-[3vh]"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between font-Inter p-24">
        <div className="w-[30vw]">
          <p className="text-3xl font-Lobster my-4">Foodieland.</p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetuipisicing elit,{" "}
          </p>
        </div>
        <div className="w-[70vw] flex justify-end p-14">
          <ul className="none text-sm flex justify-evenly">
            <li className="mx-3">Recipes</li>
            <li className="mx-3">Contact</li>
            <li className="mx-3">About Us</li>
          </ul>
        </div>
      </div>
      <hr className="w-[90vw] -mt-20 ml-10"/>
      <div className="flex justify-between w-[90vw]">
        <p className="translate-x-[38vw] p-4 text-lg">© 2020 Flowbase. Powered by Webflow</p>
        <div className="flex ">
          <img src="./logos/fb.svg" width={"10px"} className="mx-4"/>
          <img src="./logos/twi.svg" width={"20px"} className="mx-4"/>
          <img src="./logos/ig.svg" width={"20px"} className="mx-4"/>
        </div>
    </div>
    </>
  );
}

export default Footer;
