import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RecipesCard from "../../components/RecipesCard";
import LazyLoad from "react-lazy-load";
import { FaThumbsUp } from "react-icons/fa";

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
  // console.log(findID);

  const name = findID?.name;
  const picture = findID?.picture;
  const yearsOfExperience = findID?.yearsOfExperience;
  const numberOfRecipes = findID?.numberOfRecipes;
  const likes = findID?.likes;
  const description = findID?.description;

  // console.log(name, picture, yearsOfExperience, numberOfRecipes, likes,description);

  return (
    <div>
      {/* 



 */}

      {findID && (
        <div className=" bg-orange-200 md:mx-36 p-6 rounded-3xl my-16">
          <div className="hero-content mx-auto  flex-col lg:flex-row ">
            {/* <img src={picture} className="max-w-sm rounded-lg shadow-2xl" /> */}

            <LazyLoad
              height={`100%`}
              width={`100%`}
              threshold={0.95}
              onContentVisible={() => {
                console.log("Chef Banner loaded! with lazy loader");
              }}
            >
              <figure className="h-full w-full rounded-xl shadow-2xl">
                <img
                  src={picture}
                  className=" rounded-xl h-96 w-96 shadow-2xl"
                />
              </figure>
            </LazyLoad>

            <div className="mx-16  bg-orange-300 p-6 rounded-2xl shadow-2xl">
              <h1 className="text-5xl font-bold mb-5 font-serif underline">
                {name}
              </h1>
              <p className="py-2 font-medium text-lg">{description}</p>
              <p className="py-2 font-medium text-lg">
                Years of Experience : {yearsOfExperience}
              </p>
              <p className="py-2 font-medium text-lg">
                Number of Recipes : {numberOfRecipes}
              </p>
              <p className="py-2  font-medium text-lg ">Likes : {likes} </p>
            </div>
          </div>
        </div>
      )}

      {/* 





 */}

      <div className="card w-96 bg-orange-200 text-center mx-auto">
        <div className="card py-5 mx-auto items-center text-center">
          <h2 className="card-title text-2xl font-serif font-bold">
            Amount of Total Recipes: {chefRecipes.length}
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 my-16 mx-auto">
        {chefRecipes.map((recipe) => (
          <RecipesCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default ChefRecipes;
