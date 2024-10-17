import React from "react";

function Hero() {
  return (
    <div className="w-[100vw] h-[90vh] flex p-2 justify-center">
      <div className="w-[90%] h-full flex ">
      <div className="w-2/4 h-full p-6 bg-[#E7FAFE] font-Inter rounded-l-[30px] flex flex-col justify-evenly">
        <button className="bg-white rounded-full p-2 w-[150px]">
          Hot Recipes
        </button>
        <h2 className="text-6xl font-bold">Spicy delicious chicken wings</h2>
        <h3 className="text-[16px]">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </h3>
        <div>
          <button className="rounded-full bg-slate-300 p-2 w-[120px] mr-3">
            30 minutes
          </button>
          <button className="rounded-full bg-slate-300 p-2 w-[120px] ">
            Chicken
          </button>
        </div>
        <div className="w-full flex justify-between">
            <div className="flex justify-between w-[28%]">
            <img src="./logos/man.svg" />
            <div className="text-sm  flex flex-col justify-center font-bold">
                <h2>John Smith</h2>
                <h2>15 March 2022</h2>
            </div>
            </div>
        <button className="rounded-xl bg-black text-white p-4 w-[190px] text-lg ">
          View Recipes
        </button>
        </div>
      </div>
      <div className="w-2/4">
        <img src="./logos/right.svg" alt="" />
      </div>
      <div>
        <img src="./logos/Badge.svg" width={"120px"} className="absolute -translate-x-[49vw]  translate-y-10 p-2"/>
      </div>
      </div>
    </div>
  );
}

export default Hero;
