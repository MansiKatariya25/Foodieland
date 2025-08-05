import React, { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { DataProvider } from "../../App";
import Progress from "../Common/Progress";

function Category() {
  gsap.registerPlugin(ScrollTrigger);
  const catRef = useRef();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024); // Check for desktop screen size

  useEffect(() => {
    // Update the screen size dynamically
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Update for desktop
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // GSAP animation for desktop screens only
    if (isDesktop) {
      gsap.fromTo(
        catRef.current,
        { x: "-200vh" },
        {
          x: "0vh",
          duration: 3,
          ease: "power1.out",
          scrollTrigger: {
            trigger: catRef.current,
            start: "top 90%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );
    }

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isDesktop]);

  const { dataCat } = useContext(DataProvider);

  return (
    <div className="p-10 font-Inter mt-6 relative top-36">
      <div className="flex justify-between gap-5">
        <h1 className="text-3xl md:text-4xl font-bold">Categories</h1>
        <button className="bg-[#E7FAFE] p-3 md:p-4 rounded-lg text-sm md:text-base sm:text-[10px]">
          View All Categories
        </button>
      </div>
      <div
        ref={catRef}
        className="flex flex-wrap justify-center md:justify-evenly items-center cursor-pointer mt-10 gap-6 md:gap-10"
      >
        {dataCat ? (
          dataCat.map((items, i) => {
            return (
              <div
                key={i}
                className={`flex flex-col items-center p-3 w-[80%] sm:w-[40%] md:w-[15%] bg-gradient-to-t from-[#7082461A] to-[#7082461A]/2 rounded-3xl transition-all ease-in-out duration-300 hover:scale-105`}
              >
                <img src={items.image} height={"200px"} width={"90px"} />
                <h2 className="pt-3 text-sm md:text-base">{items.name}</h2>
              </div>
            );
          })
        ) : (
          <Progress />
        )}
      </div>
    </div>
  );
}

export default Category;
