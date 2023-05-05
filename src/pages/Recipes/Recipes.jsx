import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Recipes = () => {
  const recipes = useLoaderData();

  console.log(recipes);
  const { id, chef_id, recipe_name, preparation, ingredients, ratings, image } =
    recipes;

  return (
    <>
      <div className="card lg:card-side bg-orange-200 shadow-xl my-16">
        <figure className="w-full h-full my-auto  rounded-3xl mx-16">
          <img src={image} alt="Album" className="rounded-3xl h-full w-full " />
        </figure>

        <div className="card-body">
          <h2
            className="card-title font-serif
         mx-auto text-2xl underline mb-3"
          >
            {recipe_name}
          </h2>

          <div className="font-medium bg-orange-300 p-3 md:p-10  rounded-3xl">
            <span className="text-xl font-bold underline block">
              Cooking method
            </span>{" "}
            <br />
            {preparation}
          </div>

          <div className="font-medium bg-orange-300  p-3 md:p-10  rounded-3xl">
            <span className="text-xl font-bold underline block mb-4">
              Ingredients:
            </span>

            {ingredients.map((ingredient, index) => (
              <p key={index}> {ingredient} </p>
            ))}
          </div>

          <p className="font-medium bg-orange-300 p-3 md:p-5 rounded-3xl">
            Ratings : {ratings}
          </p>

          <div className="card-actions justify-end">
            <Link to={`/chef/${chef_id}`}>
              <button className="btn text-black font-bold  bg-[#f58d17bb] hover:bg-[#bd6507] border-0">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipes;
