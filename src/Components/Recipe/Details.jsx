import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataProvider } from "../../App";

function Details() {
  const { id } = useParams();
  const { dataRec, setThis } = useContext(DataProvider);

  const recipe = dataRec?.find((item) => item._id === id);
  setThis(recipe || null);

  if (!recipe) return null;

  return (
    <div className="font-Inter p-4 sm:px-8 md:px-12 lg:p-16 pt-20 sm:pt-24 ">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-10">
        {recipe.title}
      </h1>

      {/* Meta row */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-4 mt-6">
        {/* Left group */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {/* Author */}
          <div className="flex items-center gap-2">
            <img src="/logos/man.svg" alt="" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-semibold">John Smith</p>
              <p className="text-gray-500">15 March 2022</p>
            </div>
          </div>

          {/* Prep */}
          <div className="flex items-center gap-2">
            <img src="/logos/Timer.svg" alt="" className="w-6 h-6" />
            <div>
              <p className="text-gray-500">PREP TIME</p>
              <p>{recipe.time}</p>
            </div>
          </div>

          {/* Cook */}
          <div className="flex items-center gap-2">
            <img src="/logos/Timer.svg" alt="" className="w-6 h-6" />
            <div>
              <p className="text-gray-500">COOK TIME</p>
              <p>{recipe.time}</p>
            </div>
          </div>

          {/* Difficulty */}
          <div className="flex items-center gap-2">
            <img src="/logos/Knife.svg" alt="" className="w-6 h-6" />
            <p>{recipe.name}</p>
          </div>
        </div>

        {/* Print / Share */}
        <div className="flex gap-4">
          {["print", "share"].map((icon) => (
            <div
              key={icon}
              className="flex flex-col items-center gap-1 text-xs text-gray-600"
            >
              <img
                src={`/logos/${icon}.svg`}
                alt={icon}
                className="w-12 h-12 bg-[#E7FAFE] rounded-full p-3"
              />
              <span>{icon.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Image + Nutrition */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-10">
        {/* Image */}
        <div className="w-full lg:w-3/5">
          <img
            src={recipe.image || "/logos/imag.png"}
            alt={recipe.title}
            className="rounded-3xl w-full h-auto aspect-video object-cover"
          />
        </div>

        {/* Nutrition */}
        <div className="w-full lg:w-2/5 bg-[#E7FAFE] rounded-3xl p-6 lg:p-8">
          <h2 className="text-xl lg:text-2xl font-bold mb-4">
            Nutrition Information
          </h2>
          {["Calories", "TotalFat", "Protein", "Carbohydrate", "Cholesterol"].map(
            (key) => (
              <React.Fragment key={key}>
                <div className="flex justify-between py-2">
                  <span>{key.replace(/([A-Z])/g, " $1")}</span>
                  <span>
                    {recipe.nutrition?.[0]?.[key]}{" "}
                    {key === "Calories" ? "Kcal" : key === "Cholesterol" ? "mg" : "g"}
                  </span>
                </div>
                <hr />
              </React.Fragment>
            )
          )}
          <p className="mt-6 text-sm text-gray-500 text-center">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-10 text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
}

export default Details;