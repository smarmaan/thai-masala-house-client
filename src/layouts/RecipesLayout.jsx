import React from "react";
import { Outlet } from "react-router-dom";

const RecipesLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default RecipesLayout;
