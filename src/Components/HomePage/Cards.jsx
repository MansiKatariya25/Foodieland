import React, { useContext, useEffect, useRef } from "react";
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
          { opacity: 0 },
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
    <div className="p-6 sm:p-10 md:p-20 min-h-screen font-Inter mt-24 md:mt-[5%] sm:mt-[40vh]">
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-3xl sm:text-4xl md:text-6xl font-bold">
          Simple and tasty recipes
        </p>
        <p className="text-sm sm:text-base md:text-lg w-full md:w-[60%] pt-3 text-slate-400">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>

      <div className="flex flex-wrap justify-center md:justify-evenly gap-6 w-full mt-10">
        {dataRec ? (
          dataRec.slice(0, 6).map((items, i) => (
            <div
              key={i}
              ref={(el) => (cardRef.current[i] = el)}
              className="bg-[#E7FAFE] w-full sm:w-[45%] md:w-[30%] lg:w-[26%] h-[300px] sm:h-[350px] md:h-[55vh] rounded-3xl flex flex-col justify-between cursor-pointer p-4 transition-all ease-in-out duration-300 hover:scale-105"
              onClick={() => handlePageChange(items._id)}
            >
              <div className="w-full">
                <img
                  src={items.image}
                  alt={items.title}
                  className="rounded-3xl w-full h-32 sm:h-40 md:h-auto object-cover"
                />
                <img
                  src="/logos/like.png"
                  width={30}
                  className="absolute top-4 right-4"
                />
                <p className="text-base sm:text-lg md:text-xl font-bold pt-2 md:pt-4">
                  {items.title}
                </p>
              </div>

              <div className="flex justify-between text-xs sm:text-sm mt-2">
                <button className="bg-white rounded-full p-2 w-[55%]">
                  {items.time}
                </button>
                <button className="bg-white rounded-full p-2 w-[40%]">
                  {items.name}
                </button>
              </div>
            </div>
          ))
        ) : (
          <Progress />
        )}
      </div>
    </div>
  );
}

export default Cards;