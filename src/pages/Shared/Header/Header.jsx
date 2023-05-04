import React from "react";
import LazyLoad from "react-lazy-load";

import banner from "../../../../public/food-menu-banner-thai.jpg";

const Header = () => {
  return (
    <div className="card bg-base-100 shadow-xl rounded-3xl mx-6  my-3">
      

      <LazyLoad
        height={`100%`}
        width={`100%`}
        threshold={0.95}
        onContentVisible={() => {
          console.log("Banner loaded! with Lazy Loader...");
        }}
      >
        <figure className="rounded-3xl ">
          <img src={banner} />
        </figure>
      </LazyLoad>

    
    </div>
  );
};

export default Header;
