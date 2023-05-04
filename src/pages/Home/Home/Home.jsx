import React, { useEffect, useState } from "react";
import HomeChefCards from "../../../components/HomeChefCards";
import Header from "../../Shared/Header/Header";
import TimeMarquee from "../../Shared/Time Marquee/TimeMarquee";
import Statistics from "../../../components/Statistics";

const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch(`https://thai-masala-house-server-smarmaan.vercel.app/chef-details`)
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  // console.log(chefs);

  return (
    <div className="">
      <Header></Header>

      <TimeMarquee></TimeMarquee>

      <div className="">
        <div className="card w-[50%] mx-auto bg-orange-200 font-serif">
          <div className="card-body items-center text-center">
            <p className="font-bold text-3xl">
              "The Culinary Artist: A Title for All Chefs"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20 justify-center items-center mx-auto">
          {chefs.map((chef) => (
            <HomeChefCards key={chef.id} chef={chef}></HomeChefCards>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <Statistics></Statistics>
      </div>
    </div>
  );
};

export default Home;
