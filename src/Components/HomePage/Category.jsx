import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../utils/api";
import { DataProvider } from "../../App";

function Category() {
  const {dataCat} = useContext(DataProvider)
  return (
    <div className="p-10 font-Inter mt-6">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Categories</h1>
        <button className="bg-[#E7FAFE] p-4 rounded-lg">
          View All Categories
        </button>
      </div>
      <div className="flex justify-evenly items-center mt-10">
      {dataCat ? (
        dataCat.map((items, i) => {
          return (
            
              <div key={i} className={`flex flex-col items-center p-3 w-[15%] bg-gradient-to-t from-[#7082461A] to-[#7082461A]/2 rounded-3xl transition-all ease-in-out duration-300 hover:scale-105` }>
                <img src={items.image} height={"200px"} width={"90px"} />
                <h2 className="pt-3">{items.name}</h2>
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

export default Category;
