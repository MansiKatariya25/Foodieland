import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { api } from "../../utils/api";
import { DataProvider } from "../../App";
import { useNavigate } from "react-router-dom";


function Cards() {
 
  const {dataRec} = useContext(DataProvider)
  const useNav = useNavigate()
 const handlePageChange = (id)=>{
  useNav(`/recipe/${id}`)

 }

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
      {dataRec ? (
        dataRec.map((items, i) => {
          return (
            <div
              className="bg-[#E7FAFE] w-[26%] h-[55%] rounded-3xl flex flex-col justify-between items-center mt-[5%] p-4 transition-all ease-in-out duration-300 hover:scale-105 "
              key={i} onClick={()=>handlePageChange(items.id)} 
            >
              <div className="w-[21vw]">
                <img src={items.image} className="rounded-3xl" />
                <img
                  src="/logos/like.png"
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
