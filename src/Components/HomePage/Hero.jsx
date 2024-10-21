import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Hero() {
  const textRef = useRef();
  const textRef2 = useRef();
  const divRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        x: "-20vw",
      },
      {
        x: "0vw",
        duration: 1,
        ease: "power1.out",
      }
    );
    gsap.fromTo(
      textRef2.current,
      {
        x: "50vw",
      },
      {
        x: "0vw",
        duration: 1,
        ease: "power1.out",
      }
    );
    gsap.fromTo(
      divRef.current,
      {
        y: "0vh",
      },
      {
        y: "-50vh",
        duration: 4,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: divRef.current,
          start: "bottom 90%",
          end: "bottom 0%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={divRef}
      className="w-[100vw] h-[90vh] flex p-2 justify-center relative top-32"
    >
      <div ref={textRef} className="w-[90%] h-full flex">
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
            <button className="rounded-full bg-slate-300 p-2 w-[120px] mr-3 transform transition-transform duration-200 hover:scale-105">
              30 minutes
            </button>
            <button className="rounded-full bg-slate-300 p-2 w-[120px] transform transition-transform duration-200 hover:scale-105">
              Chicken
            </button>
          </div>
          <div className="w-full flex justify-between">
            <div className="flex justify-between w-[28%]">
              <img src="/logos/man.svg" />
              <div className="text-sm  flex flex-col justify-center font-bold">
                <h2>John Smith</h2>
                <h2>15 March 2022</h2>
              </div>
            </div>
            <button className="rounded-xl cursor-pointer bg-black text-white p-4 w-[190px] text-lg transform transition-transform duration-200 hover:scale-105">
              View Recipes
            </button>
          </div>
        </div>
        <div ref={textRef2} className="w-2/4 h-full">
          <img src="/logos/right.svg" className="h-full max-w-none" />
        </div>
        <div>
          <img
            src="/logos/Badge.svg"
            width={"120px"}
            className="absolute -translate-x-[49vw]  translate-y-10 p-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
