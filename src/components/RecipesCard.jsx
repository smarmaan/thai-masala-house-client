import React from "react";
import { Link } from "react-router-dom";

const RecipesCard = ({ recipe }) => {
  // console.log(recipe);

  const {id, recipe_name, preparation, ingredients } = recipe;

  //   console.log(recipe_name, preparation, ingredients);

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

        {preparation.length < 250 ? (
          <>{preparation}</>
        ) : (
          <>{preparation.slice(0, 250)}... <Link to={`/recipes/${id}`}> See More</Link>    </>
        )}

        {ingredients.map((ingredient, index) => (
          <p key={index}> {ingredient} </p>
        ))}

        <div className="card-actions justify-end">
        <Link to={`/recipes/${id}`}><button className="btn btn-primary">See More</button></Link> 

          
        </div>
      </div>
    </div>
  );
};

export default RecipesCard;
