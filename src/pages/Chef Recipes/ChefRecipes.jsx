import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RecipesCard from "../../components/RecipesCard";

const ChefRecipes = () => {
  const { id } = useParams();

  const chefRecipes = useLoaderData();

  return (
    <div>
      <p>ChefRecipes : {chefRecipes.length}</p>

      {chefRecipes.map((recipe) => (
        <RecipesCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default ChefRecipes;
