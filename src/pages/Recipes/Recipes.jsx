import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Recipes = () => {
  const recipes = useLoaderData();

  console.log(recipes);
  const { id, chef_id, recipe_name, preparation, ingredients } = recipes;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      {/* <figure>
    <img
      src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
      alt="Shoes"
    />
  </figure> */}
      <div className="card-body">
        <h2 className="card-title">{recipe_name}</h2>

        <>{preparation}</>

        {ingredients.map((ingredient, index) => (
          <p key={index}> {ingredient} </p>
        ))}

        <div className="card-actions justify-end">
          <Link to={`/chef/${chef_id}`}>
            {" "}
            <button className="btn btn-primary">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
