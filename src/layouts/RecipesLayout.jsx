import React from "react";
import Recipes from "../pages/Recipes/Recipes";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";

const RecipesLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default RecipesLayout;
