import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeChefCards from "../../../components/HomeChefCards";
import Header from "../../Shared/Header/Header";
import TimeMarquee from "../../Shared/Time Marquee/TimeMarquee";

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


      <h1 className="mt-24 text-center "> all chefs </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20 justify-center items-center mx-auto">
        {chefs.map((chef) => (
          <HomeChefCards key={chef.id} chef={chef}></HomeChefCards>
        ))}
      </div>
    </div>
  );
};

export default Home;
