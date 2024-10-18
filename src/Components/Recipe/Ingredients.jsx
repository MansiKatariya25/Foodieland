import React from "react";
import { useContext } from "react";
import { DataProvider } from "../../App";

function Ingredients() {
  const { dataRec, setThis, thisRecipe } = useContext(DataProvider);

  console.log(thisRecipe);

  return (
    <div className="font-Inter p-16 w-[98vw] ">
      <div className="w-full flex justify-between">
        <div className="p-8 flex flex-col  w-[50%]">
          <p className="text-6xl font-bold p-4">Ingredients</p>
          <p className="text-3xl font-bold p-6">For main dish</p>
          <div className="w-[100%] h-full flex flex-col justify-evenly">
            {thisRecipe
              ? thisRecipe.maindish.map((items, i) => {
                  return (
                    <>
                      <div className="flex p-4">
                        <img src="/logos/black.png" width={"22px"} />
                        <p className="ml-4">{items}</p>
                      </div>
                      <hr />
                    </>
                  );
                })
              : ""}
            <p className="text-3xl font-bold mt-4">For the sauce</p>
            {thisRecipe
              ? thisRecipe.sauce.map((items, i) => {
                  return (
                    <>
                      <div className="flex p-4">
                        <img src="/logos/circle.svg" width={"20px"} />
                        <p className="ml-4">{items}</p>
                      </div>
                      <hr />
                    </>
                  );
                })
              : ""}
          </div>
        </div>
        <div className="w-[40%] h-auto p-8">
          <p className="text-5xl font-bold p-4 ml-8">Other Recipe</p>
          <div className="flex p-4 px-12">
            <img
              src="/logos/meatballs.png"
              width={"170px"}
              className="rounded-3xl mr-3"
            />
            <div className="p-2 flex flex-col justify-between">
              <p className="text-xl font-bold">
                Chicken Meatball with Creamy Chees...
              </p>
              <p className="text-sm text-gray-400">By Andreas Paula</p>
            </div>
          </div>
          <div className="flex pt-6 px-12">
            <img
              src="/logos/creamy.png"
              width={"170px"}
              className="rounded-3xl mr-3"
            />
            <div className=" p-2 flex flex-col justify-between">
              <p className="text-xl font-bold">
                The Creamiest Creamy Chicken an...
              </p>
              <p className="text-sm text-gray-400">By Andreas Paula</p>
            </div>
          </div>
          <div className="flex pt-6 px-12">
            <img
              src="/logos/pot.png"
              width={"170px"}
              className="rounded-3xl mr-3"
            />
            <div className=" p-2 flex flex-col justify-between">
              <p className="text-xl font-bold">
                The Best Easy One Pot Chicken and Rice
              </p>
              <p className="text-sm text-gray-400">By Andreas Paula</p>
            </div>
          </div>
          <img
            src="/logos/Ads.png"
            width={"330px"}
            className="translate-x-20 translate-y-14"
          />
        </div>
      </div>
      <div className="w-[60vw]  mb-24">
        <p className="text-6xl font-bold p-8 mt-4">Directions</p>
        <div className="flex flex-col p-4">
          {
            thisRecipe? thisRecipe.direction.map((items,i)=>{
                return(
                  <>
                  <div className="flex ">
                  <img src="/logos/circle.svg" width={"20px"} />
          <p className="ml-4 text-2xl">{i+1 +" . "+items.title}</p>
        </div>
        <p className="ml-14 p-2 text-xl text-gray-400">
         {items.direction}
        </p>
        <hr className=" ml-10 my-10" />
                  </>
                );
            }):''}

          
        
      </div>
    </div>
    </div>
);
}

export default Ingredients;
