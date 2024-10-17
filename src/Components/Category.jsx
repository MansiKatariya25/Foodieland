import React, { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../utils/api";

function Category() {
  const [data, setdata] = useState();

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await axios.get(`${api}getCategory`);
        setdata(response.data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, []);
  return (
    <div className="p-10 font-Inter mt-6">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Categories</h1>
        <button className="bg-[#E7FAFE] p-4 rounded-lg">
          View All Categories
        </button>
      </div>
      <div className="flex justify-evenly items-center mt-10">
      {data ? (
        data.map((items, i) => {
          return (
            
              <div key={i} className={`flex flex-col items-center p-3 w-[15%] bg-gradient-to-t from-[${items.color}] to-[${items.color}]/90 rounded-3xl`}>
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
