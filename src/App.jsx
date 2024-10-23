import { createContext, useEffect, useState } from "react";
import Main from "./Components/Recipe/Main";
import Home from "./Components/HomePage/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { api } from "./utils/api";
import RecipeList from "./Components/RecipeList/RecipeList";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";


export const DataProvider = createContext();
function App() {
  const [dataRec, setdataRec] = useState(null);
  const [dataCat, setdataCat] = useState(null);
  const [thisRecipe, setThis] = useState(null);


  useEffect(() => {
    const getRecipe = async () => {
      try {
        const response = await axios.get(`${api}getRecipe`);
        setdataRec(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRecipe();
  }, []);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await axios.get(`${api}getCategory`);
        setdataCat(response.data);
        
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, []);

  return (
    <>
      <DataProvider.Provider value={{ dataRec, dataCat, setThis, thisRecipe }}>
        <BrowserRouter>
          <Routes>
            <Route path="/recipe/:id" element={<Main />} />
            <Route path="recipe" element={<RecipeList />} />
            <Route path="/" element={<Home />} />
            <Route path="/Auth/login" element={<Login />} />
            <Route path="/Auth/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </DataProvider.Provider>
    </>
  );
}

export default App;
