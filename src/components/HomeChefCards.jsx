import React from "react";
import { Link } from "react-router-dom";

const HomeChefCards = ({ chef }) => {
  //   console.log(chef);

  const { id, name, picture, yearsOfExperience, numberOfRecipes, likes } = chef;

  //   console.log(id, name, picture, yearsOfExperience, numberOfRecipes, likes);

  return (
    <div className="card w-96 h-full bg-orange-400 shadow-xl my-10 mx-auto">
      <figure className="px-10 pt-10">
        <img src={picture} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{yearsOfExperience}</p>
        <p>{numberOfRecipes}</p>
        <p>{likes}</p>
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
