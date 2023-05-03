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

  const findID = chefs.find((chef) => chef.id == id);
  console.log(findID);

  // id, name, picture, yearsOfExperience, numberOfRecipes, likes

  const name = findID?.name;
  const picture = findID?.picture;
  const yearsOfExperience = findID?.yearsOfExperience;
  const numberOfRecipes = findID?.numberOfRecipes;
  const likes = findID?.likes;
  // console.log(name, picture, yearsOfExperience, numberOfRecipes, likes);

  return (
    <div>
      <p>ChefRecipes : {chefRecipes.length}</p>

      {/* 



 */}

      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-2">short bio/description</p>
            <p className="py-2">{yearsOfExperience}</p>
            <p className="py-2">{numberOfRecipes}</p>
            <p className="py-2">{likes}</p>
          </div>
        </div>
      </div>

      {/* 





 */}

      {chefRecipes.map((recipe) => (
        <RecipesCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default ChefRecipes;
