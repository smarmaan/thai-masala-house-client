import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const HomeChefCards = ({ chef }) => {
  //   console.log(chef);

  const { id, name, picture, yearsOfExperience, numberOfRecipes, likes } = chef;

  //   console.log(id, name, picture, yearsOfExperience, numberOfRecipes, likes);

  return (
    <div className="card w-96 h-full bg-orange-400 shadow-xl my-10 mx-auto">
      {/* <figure className="px-10 pt-10">
        <img src={picture} alt="Shoes" className="rounded-xl" />
      </figure> */}

      <LazyLoad
        height={`100%`}
        width={`100%`}
        threshold={0.95}
        onContentVisible={() => {
          console.log("Chef Picture loaded! with lazy loader");
        }}
      >
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-xl w-[100%]" />
        </figure>
      </LazyLoad>

      <div className="card-body items-center text-center">
        <h2 className="card-title">name: {name}</h2>
        <p>years Of Experience :{yearsOfExperience}</p>
        <p>number Of Recipes:{numberOfRecipes}</p>
        <p>likes : {likes}</p>
        <div className="card-actions">
          <Link to={`/chef/${chef.id}`}>
            <button className="btn btn-primary">View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeChefCards;

//
