import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const HomeChefCards = ({ chef }) => {
  //   console.log(chef);

  const { id, name, picture, yearsOfExperience, numberOfRecipes, likes } = chef;

  //   console.log(id, name, picture, yearsOfExperience, numberOfRecipes, likes);

  return (
    <div className="card bg-orange-200 hover:bg-orange-300 shadow-xl my-10 mx-auto">
      <LazyLoad
        height={`100%`}
        width={`100%`}
        threshold={0.95}
        onContentVisible={() => {
          console.log("Chef Picture loaded! with lazy loader");
        }}
      >
        <figure className="px-10  pt-10 mx-auto">
          <img src={picture} alt="" className="rounded-xl w-96 h-96   shadow-2xl" />
        </figure>
      </LazyLoad>

      <div className="card card-body items-center text-center">
        <h2 className="card-title font-bold text-2xl  bg-orange-300 rounded-3xl px-6 py-3 my-5 shadow-2xl">
          Name: {name}
        </h2>

        <div className="text-center text-lg font-semibold bg-orange-300 rounded-3xl px-10 py-3 my-5 shadow-2xl">
          <p className="">Years of Experience: {yearsOfExperience}</p>
          <p className="">Number of Recipes: {numberOfRecipes}</p>
          <p className="">Likes : {likes}</p>
        </div>

        <div className="card-actions ">
          <Link to={`/chef/${chef.id}`}>
            <button className="btn text-black border-0 shadow-xl hover:text-white normal-case text-xl font-bold  bg-orange-300 hover:bg-orange-400 ">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeChefCards;

//
