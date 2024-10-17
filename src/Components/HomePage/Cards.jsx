import axios from "axios";
import React, { useEffect, useState } from "react";
import { api } from "../../utils/api";

function Cards() {
  const [data, setdata] = useState();

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const response = await axios.get(`${api}getRecipe`);
        setdata(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRecipe();
  }, []);

  return (
    <div className="p-20 h-[180vh] font-Inter mt-[5%]">
      <div className="">
        <div className="flex flex-col justify-center items-center">
          <p className="text-6xl font-bold">Simple and tasty recipes</p>
          <p className=" flex text-lg w-[60%] text-center pt-3 text-slate-400">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly h-[100vh]">
      {data ? (
        data.map((items, i) => {
          return (
            <div
              className="bg-[#E7FAFE] w-[26%] h-[55%] rounded-3xl flex flex-col justify-between items-center mt-[5%] p-4"
              key={i}
            >
              <div className="w-[21vw]">
                <img src={items.image} className="rounded-3xl" />
                <img
                  src="./logos/like.png"
                  width={"30px"}
                  className=" absolute translate-x-[18vw] -translate-y-[27vh]"
                />
                <div>
                  <p className="text-xl font-bold my-5">{items.title}</p>
                </div>
              </div>
              <div className="flex w-full">
                <button className="bg-white rounded-full p-2 mr-2">
                  {items.time}
                </button>
                <button className="bg-white rounded-full p-2">
                  {items.name}
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p>Loading....</p>
      )}
    </div>
    </div>
  );
}

export default Cards;
