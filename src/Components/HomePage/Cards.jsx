import React, { useContext, useEffect, useRef, useState } from "react";
import { DataProvider } from "../../App";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Progress from "../Common/Progress";

gsap.registerPlugin(ScrollTrigger);

function Cards() {
  const { dataRec } = useContext(DataProvider);
  const useNav = useNavigate();
  const handlePageChange = (id) => {
    useNav(`/recipe/${id}`);
  };
 
  const cardRef = useRef([]);
  useEffect(() => {
    cardRef.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 4,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 70%",
              end: "bottom 40%",
              scrub: true,
            },
          }
        );
      }
    });
  }, [dataRec]);

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
      <div  className="flex flex-wrap justify-evenly w-[90vw] h-[100vh]">
        {dataRec ? (
          dataRec.map((items, i) => {
            return i <= 5 ? (
              <div ref={(el) => (cardRef.current[i] = el)}
                className="bg-[#E7FAFE] w-[26%] h-[55%] rounded-3xl flex flex-col justify-between cursor-pointer mt-[5%] p-4 transition-all ease-in-out duration-300 hover:scale-105 "
                key={i}
                onClick={() => handlePageChange(items._id)}
              >
                <div className="w-[21vw]">
                  <img src={items.image} className="rounded-3xl" />
                  <img
                    src="/logos/like.png"
                    width={"30px"}
                    className=" absolute translate-x-[18vw] -translate-y-[27vh]"
                  />
                  <div>
                    <p className="text-xl font-bold pt-4">{items.title}</p>
                  </div>
                </div>
                <div className="flex justify-between w-[65%] text-sm">
                  <button className="bg-white rounded-full p-2 w-[55%] ">
                    {items.time}
                  </button>
                  <button className="bg-white rounded-full p-2 w-[40%]">
                    {items.name}
                  </button>
                </div>
              </div>
            ) : (
              " "
            );
          })
        ) : (
          <Progress/>
        )}
      </div>
    </div>
  );
}

export default Cards;
