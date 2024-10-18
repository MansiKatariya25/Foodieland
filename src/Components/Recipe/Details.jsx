import React from "react";

function Details() {
  return (
    <div className="font-Inter p-16 flex flex-col justify-between h-[100vh]">
      <div className="">
        <p className="text-5xl mt-10 font-bold">Health Japanese Fried Rice</p>
        <div className="w-[100vw] flex justify-between mt-10 ">
          <div className="flex justify-between w-[60%]">
            <div className="flex w-[20%]">
              <img src="./logos/man.svg" width={"50px"} />
              <div className="text-sm ml-2 flex flex-col justify-center ">
                <h2>John Smith</h2>
                <h2>15 March 2022</h2>
              </div>
            </div>
            <div className="flex">
              <img src="./logos/Timer.svg" width={"30px"} />
              <div className="flex flex-col ml-2 justify-center">
                <p className="text-sm">PREP TIME</p>
                <p className="text-sm">15 Minutes</p>
              </div>
            </div>
            <div className="flex">
              <img src="./logos/Timer.svg" width={"30px"} />
              <div className="flex flex-col ml-2 justify-center">
                <p className="text-sm">COOK TIME</p>
                <p className="text-sm">15 Minutes</p>
              </div>
            </div>
            <div className="flex">
              <img src="./logos/Knife.svg" width={"30px"} />
              <div className="flex flex-col ml-2 justify-center">
                <p className="text-sm">Chicken</p>
              </div>
            </div>
          </div>
          <div className="w-[40%] flex justify-center p-2">
            <div className="flex flex-col items-center ">
            <img src="./logos/print.svg" alt="" className="p-4 bg-[#E7FAFE] rounded-full w-[60px] h-[60px] mx-4" />
            <p className="text-[10px] my-4">PRINT</p>
            </div>
            <div className="flex flex-col items-center">
            <img src="./logos/share.svg" alt="" className="p-4 bg-[#E7FAFE] rounded-full w-[60px] h-[60px] mx-4" />
            <p className="text-[10px] my-4">SHARE</p>
            </div>
            
          </div>
        </div>

        <div className="mt-10 flex justify-evenly ">
          <div>
            <img src="./logos/imag.png" className="rounded-3xl" />
          </div>
          <div className="bg-[#E7FAFE] w-[30vw] h-auto rounded-3xl p-8 flex flex-col ">
            <p className="text-2xl font-bold"> Nutrition Information</p>
            <div className="flex justify-between my-6">
              <p>Calories</p>
              <p>219.9 kcal</p>
            </div>
            <hr />
            <div className="flex justify-between my-4">
              <p>Total Fat</p>
              <p>10.7 g</p>
            </div>
            <hr />
            <div className="flex justify-between my-4">
              <p>Protein</p>
              <p>7.9 g</p>
            </div>
            <hr />
            <div className="flex justify-between my-4">
              <p>Carbohydrate</p>
              <p>22.3 g</p>
            </div>
            <hr />
            <div className="flex justify-between my-4">
              <p>Cholesterol</p>
              <p>37.4 mg</p>
            </div>
            <hr />
            <p className="my-32 text-center text-gray-500">
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.{" "}
            </p>
          </div>
        </div>
      </div>
      <p className="text-left my-16 p-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  );
}

export default Details;
