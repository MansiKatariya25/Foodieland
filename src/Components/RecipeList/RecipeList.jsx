// RecipeList.jsx  (no logic changes)
import React from "react";
import Navbar from "../Common/Navbar";
import List from "./List";
import Footer from "../Common/Footer";

function RecipeList() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <List />
      <Footer/>
    </div>
  );
}

export default RecipeList;