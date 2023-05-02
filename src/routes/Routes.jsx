import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ChefRecipes from "../pages/Chef Recipes/ChefRecipes";
import Recipes from "../pages/Recipes/Recipes";
import RecipesLayout from "../layouts/RecipesLayout";
import Blog from "../pages/Blog/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "chef/:id",
        element: <ChefRecipes></ChefRecipes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef-details/${params.id}`),
      },
      {
        path: "recipes",
        element: <RecipesLayout></RecipesLayout>,
        children: [
          {
            path: ":id",
            element: <Recipes></Recipes>,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/recipes/${params.id}`),
          },
        ],
      },

      {
        path: "all-recipes",
        element: <ChefRecipes></ChefRecipes>,
        loader: () => fetch(`http://localhost:5000/recipes`),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
