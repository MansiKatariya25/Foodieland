import React, { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { DataProvider } from "../../App";

function Category() {
  gsap.registerPlugin(ScrollTrigger);
  const catRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      catRef.current,
      {
        x: "-200vh",
      },
      {
        x: "0vh",
        duration: 3,
        ease: "power1.out",
        scrollTrigger: {
          trigger: catRef.current,
          start: "top 90%",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );
  });
  const { dataCat } = useContext(DataProvider);
  return (
    <div className="p-10 font-Inter mt-6 relative top-36 ">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Categories</h1>
        <button className="bg-[#E7FAFE] p-4 rounded-lg">
          View All Categories
        </button>
      </div>
      <div
        ref={catRef}
        className="flex justify-evenly items-center cursor-pointer mt-10"
      >
        {dataCat ? (
          dataCat.map((items, i) => {
            return (
              <div
                key={i}
                className={`flex flex-col items-center p-3 w-[15%] bg-gradient-to-t from-[#7082461A] to-[#7082461A]/2 rounded-3xl transition-all ease-in-out duration-300 hover:scale-105`}
              >
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
