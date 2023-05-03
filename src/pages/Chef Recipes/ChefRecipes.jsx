import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RecipesCard from "../../components/RecipesCard";

const ChefRecipes = () => {
  const { id } = useParams();

  const chefRecipes = useLoaderData();

  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch(`https://thai-masala-house-server-smarmaan.vercel.app/chef-details`)
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  // console.log(chefs);

  const findID = chefs.find((chef) => chef.id == id);
  console.log(findID);

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
