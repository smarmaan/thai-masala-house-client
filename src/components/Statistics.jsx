import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Tooltip,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Statistics = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch(`https://thai-masala-house-server-smarmaan.vercel.app/chef-details`)
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  const chefData = {};

  chefs.forEach((chef) => {
    chefData[chef.id] = chef;
  });

  const chefOne = chefData["1"];
  const chefTwo = chefData["2"];
  const chefThree = chefData["3"];
  const chefFour = chefData["4"];
  const chefFive = chefData["5"];
  const chefSix = chefData["6"];

  //   console.log(chefOne);

  // name, picture, yearsOfExperience, numberOfRecipes, likes, ratings

  const chefStatistics = [
    {
      chefName: chefOne?.name,
      yearsOfExperience: chefOne?.yearsOfExperience,
      numberOfRecipes: chefOne?.numberOfRecipes,
      likes: chefOne?.likes,
      ratings: chefOne?.ratings,
    },
    {
      chefName: chefTwo?.name,
      yearsOfExperience: chefTwo?.yearsOfExperience,
      numberOfRecipes: chefTwo?.numberOfRecipes,
      likes: chefTwo?.likes,
      ratings: chefTwo?.ratings,
    },
    {
      chefName: chefThree?.name,
      yearsOfExperience: chefThree?.yearsOfExperience,
      numberOfRecipes: chefThree?.numberOfRecipes,
      likes: chefThree?.likes,
      ratings: chefThree?.ratings,
    },
    {
      chefName: chefFour?.name,
      yearsOfExperience: chefFour?.yearsOfExperience,
      numberOfRecipes: chefFour?.numberOfRecipes,
      likes: chefFour?.likes,
      ratings: chefFour?.ratings,
    },
    {
      chefName: chefFive?.name,
      yearsOfExperience: chefFive?.yearsOfExperience,
      numberOfRecipes: chefFive?.numberOfRecipes,
      likes: chefFive?.likes,
      ratings: chefFive?.ratings,
    },
    {
      chefName: chefSix?.name,
      yearsOfExperience: chefSix?.yearsOfExperience,
      numberOfRecipes: chefSix?.numberOfRecipes,
      likes: chefSix?.likes,
      ratings: chefSix?.ratings,
    },
  ];

  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-xl mb-10">Chef Statistics Data</h1>

        <p className="text-lg font-medium mb-10">
          Radar Chart created based on the chef statistics data ... counting
          their total likes.... The counting shows us the most popular chef is
          David Thompson... Giving his best and getting the first position on
          peoples heart....
        </p>
      </div>

      <div className="my-24">
        <ResponsiveContainer width="100%" height={500}>
          <RadarChart data={chefStatistics} cx="50%" cy="50%" outerRadius="90%">
            <PolarGrid />
            <PolarAngleAxis dataKey="chefName" />
            <PolarRadiusAxis angle={20} />

            <Radar
              name="Likes"
              dataKey="likes"
              stroke="#d13358"
              fill="#d13358"
              fillOpacity={0.1}
            />
            <Tooltip />

            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
