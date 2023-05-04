import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ChefRecipes from "../pages/Chef Recipes/ChefRecipes";
import Recipes from "../pages/Recipes/Recipes";
import RecipesLayout from "../layouts/RecipesLayout";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login-Register/Login";
import Register from "../pages/Login-Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "chef/:id",
        element: (
          <PrivateRoute>
            <ChefRecipes></ChefRecipes>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://thai-masala-house-server-smarmaan.vercel.app/chef-details/${params.id}`
          ),
      },
      {
        path: "recipes",
        element: (
          <PrivateRoute>
            <RecipesLayout></RecipesLayout>
          </PrivateRoute>
        ),
        children: [
          {
            path: ":id",
            element: (
              <PrivateRoute>
                <Recipes></Recipes>
              </PrivateRoute>
            ),
            loader: ({ params }) =>
              fetch(
                `https://thai-masala-house-server-smarmaan.vercel.app/recipes/${params.id}`
              ),
          },
        ],
      },

      {
        path: "all-recipes",
        element: (
          <PrivateRoute>
            <ChefRecipes></ChefRecipes>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(`https://thai-masala-house-server-smarmaan.vercel.app/recipes`),
      },
      {
        path: "blog",
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
