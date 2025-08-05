import React, { useState, useContext } from "react";
import { DataProvider } from "../../App";

function Ingredients() {
  const { thisRecipe } = useContext(DataProvider);

  // tick / untick helpers
  const [selMain, setSelMain]   = useState([]);
  const [selSauce, setSelSauce] = useState([]);
  const [selDir,  setSelDir]    = useState([]);

  const toggle = (arr, set, idx) =>
    set(arr.includes(idx) ? arr.filter((i) => i !== idx) : [...arr, idx]);

  return (
    <div className="font-Inter w-full px-4 sm:px-6 md:px-8 lg:px-16 py-12">
      {/* Ingredients + Other Recipe */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Ingredients */}
        <section className="w-full lg:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ingredients</h2>

          {/* Main dish */}
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">For main dish</h3>
          {thisRecipe?.maindish?.map((item, i) => (
            <div key={`main-${i}`} className="flex items-center py-2">
              <img
                src={selMain.includes(i) ? "/logos/black.png" : "/logos/circle.svg"}
                alt=""
                className="w-5 h-5 cursor-pointer"
                onClick={() => toggle(selMain, setSelMain, i)}
              />
              <p className="ml-3 text-lg">{item}</p>
            </div>
          ))}

          {/* Sauce */}
          <h3 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
            For the sauce
          </h3>
          {thisRecipe?.sauce?.map((item, i) => (
            <div key={`sauce-${i}`} className="flex items-center py-2">
              <img
                src={selSauce.includes(i) ? "/logos/black.png" : "/logos/circle.svg"}
                alt=""
                className="w-5 h-5 cursor-pointer"
                onClick={() => toggle(selSauce, setSelSauce, i)}
              />
              <p className="ml-3 text-lg">{item}</p>
            </div>
          ))}
        </section>

        {/* Other Recipe */}
        <aside className="w-full lg:w-2/5 flex-shrink-0">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Other Recipe</h2>

          {[
            { img: "/logos/meatballs.png", txt: "Chicken Meatball with Creamy Chees..." },
            { img: "/logos/creamy.png", txt: "The Creamiest Creamy Chicken an..." },
            { img: "/logos/pot.png", txt: "The Best Easy One Pot Chicken and Rice" },
          ].map((rec, i) => (
            <div key={`rec-${i}`} className="flex items-center gap-4 mb-6">
              <img
                src={rec.img}
                alt=""
                className="w-28 sm:w-36 h-24 object-cover rounded-3xl"
              />
              <div>
                <p className="font-bold text-lg">{rec.txt}</p>
                <p className="text-sm text-gray-400">By Andreas Paula</p>
              </div>
            </div>
          ))}

          <img src="/logos/Ads.png" alt="ad" className="w-full max-w-xs mx-auto mt-8" />
        </aside>
      </div>

      {/* Directions */}
      <section className="w-full lg:w-3/5 mt-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Directions</h2>
        {thisRecipe?.direction?.map((step, i) => (
          <div key={`dir-${i}`} className="mb-8">
            <div className="flex items-start">
              <img
                src={selDir.includes(i) ? "/logos/black.png" : "/logos/circle.svg"}
                alt=""
                className="w-5 h-5 mt-1 cursor-pointer shrink-0"
                onClick={() => toggle(selDir, setSelDir, i)}
              />
              <p className="ml-3 text-xl sm:text-2xl font-semibold">
                {i + 1}. {step.title}
              </p>
            </div>
            <p className="ml-8 mt-2 text-lg text-gray-500">{step.direction}</p>
            <hr className="ml-8 mt-6" />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Ingredients;