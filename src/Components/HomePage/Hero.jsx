import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Hero() {
  const textRef = useRef();
  const textRef2 = useRef();
  const divRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      // Desktop animations (unchanged)
      gsap.fromTo(
        textRef.current,
        { x: "-20vw" },
        { x: "0vw", duration: 1, ease: "power1.out" }
      );
      gsap.fromTo(
        textRef2.current,
        { x: "50vw" },
        { x: "0vw", duration: 1, ease: "power1.out" }
      );
      gsap.fromTo(
        divRef.current,
        { y: "0vh" },
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
    } else {
      // Mobile & Tablet animations (simple fade + slideUp)
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
      gsap.fromTo(
        textRef2.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.3,
        }
      );
    }
  }, []);

  return (
    <div
      ref={divRef}
      className="w-full h-auto md:h-[90vh] flex flex-col md:flex-row items-center justify-center relative top-20 md:top-32"
    >
      <div
        ref={textRef}
        className="w-full md:w-[90%] h-auto md:h-full flex flex-col md:flex-row items-center justify-center"
      >
        <div className="w-full md:w-2/4 h-auto md:h-full p-4 md:p-6 bg-[#E7FAFE] font-Inter md:rounded-l-[30px] flex flex-col justify-evenly space-y-4 md:space-y-0">
          <button className="bg-white rounded-full p-2 w-[130px] md:w-[150px] text-sm md:text-base">
            Hot Recipes
          </button>
          <h2 className="text-3xl md:text-6xl font-bold leading-tight text-center">
            Spicy delicious chicken wings
          </h2>
          <h3 className="text-sm md:text-[16px] text-center">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            <button className="rounded-full bg-slate-300 p-2 w-[100px] md:w-[120px] text-sm md:text-base transform transition-transform duration-200 hover:scale-105">
              30 minutes
            </button>
            <button className="rounded-full bg-slate-300 p-2 w-[100px] md:w-[120px] text-sm md:text-base transform transition-transform duration-200 hover:scale-105">
              Chicken
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-4">
            <div className="flex items-center mb-4 md:mb-0">
              <img src="/logos/man.svg" className="w-10 h-10 mr-3" />
              <div className="text-xs md:text-sm font-bold">
                <h2>John Smith</h2>
                <h2>15 March 2022</h2>
              </div>
            </div>
            <button className="rounded-xl cursor-pointer bg-black text-white p-3 md:p-4 w-full md:w-[190px] text-sm md:text-lg transform transition-transform duration-200 hover:scale-105">
              View Recipes
            </button>
          </div>
        </div>

        <div
          ref={textRef2}
          className="w-full md:w-2/4 h-[250px] md:h-full relative mt-6 md:mt-0"
        >
          <img
            src="/logos/right.svg"
            className="w-full h-full object-cover md:max-w-none"
          />
          <img
            src="/logos/Badge.svg"
            width="120"
            className="absolute left-[45vw] top-4 sm:-translate-x-[49vw] sm:translate-y-10 p-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
