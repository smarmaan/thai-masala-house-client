import React, { useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaRegStar, FaStar } from "react-icons/fa";

const RecipesCard = ({ recipe }) => {
  // console.log(recipe);

  const { id, recipe_name, preparation, ingredients, ratings, image } = recipe;

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(true);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Recipe has been saved into favorite list",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="card w-96 bg-orange-200 shadow-xl mx-auto">
      <figure className="">
        <img src={image} className="rounded w-full h-96" alt="" />
      </figure>
      <div className="card-body">
        <h2
          className="card-title font-serif
         mx-auto text-2xl underline mb-3"
        >
          {recipe_name}
        </h2>

        {preparation.length < 250 ? (
          <div className="font-medium bg-orange-300 px-3 py-3 rounded-3xl">
            <span className="text-xl font-bold underline block">
              Preparation:
            </span>{" "}
            <br />
            {preparation}
          </div>
        ) : (
          <div className="font-medium bg-orange-300 px-3 py-3 rounded-3xl">
            <span className="text-xl font-bold underline block">
              Cooking method:
            </span>
            <br />
            {preparation.slice(0, 250)}...{" "}
            <Link
              to={`/recipes/${id}`}
              className="btn btn-xs w-24 text-black hover:text-white bg-orange-200 hover:bg-orange-400  border-0 shadow-xl"
            >
              {" "}
              See More
            </Link>{" "}
          </div>
        )}

        <div className="font-medium bg-orange-300 px-3 py-3 rounded-3xl">
          <span className="text-xl font-bold underline block mb-4">
            Ingredients:
          </span>
          {ingredients.slice(0, 5).map((ingredient, index) => (
            <li key={index}> {ingredient} </li>
          ))}
          <Link
            to={`/recipes/${id}`}
            className="btn btn-xs w-24 text-black hover:text-white bg-orange-200 hover:bg-orange-400  border-0 shadow-xl"
          >
            Load More
          </Link>
        </div>

        <p className="flex gap-2 items-center  font-medium bg-orange-300 px-3 py-3 rounded-3xl">
          Ratings :
          <Rating
            placeholderRating={ratings}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className=""></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          />
          {ratings}
        </p>

        <div className="card-actions justify-end">
          <Link to={`/recipes/${id}`}>
            <button className="btn text-black font-bold  bg-[#f58d17bb] hover:bg-[#bd6507] border-0">
              All Details
            </button>
          </Link>
          <button
            className="btn text-black font-bold  bg-[#f58d17bb] hover:bg-[#bd6507] border-0"
            disabled={isFavorite}
            onClick={handleFavoriteClick}
          >
            {isFavorite ? "Favorited" : "Favorite"}
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default RecipesCard;
