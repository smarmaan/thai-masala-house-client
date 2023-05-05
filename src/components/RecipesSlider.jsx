import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

const RecipesSlider = () => {
  return (
    <div className="bg-orange-100  my-16 rounded-3xl p-10 shadow-2xl">
      <div className="font-serif font-bold my-6 mx-auto">
        <h1 className="font-serif font-extrabold text-4xl text-center underline">
          {" "}
          Thai Food Speciality{" "}
        </h1>
        <p className="my-5">
          Thai cuisine is renowned around the world for its unique blend of
          spicy, sweet, sour, and salty flavors. The use of fresh herbs and
          spices, as well as the harmonious balance of contrasting tastes, make
          Thai food a delightful culinary experience. In this blog post, we will
          explore the specialty of Thai food and why it has gained such immense
          popularity worldwide.
        </p>
        <p>
          One of the most distinctive aspects of Thai food is its bold use of
          flavors. Thai cuisine typically features a combination of salty, sour,
          spicy, and sweet tastes in each dish, creating a complex and
          multi-layered flavor profile. The use of herbs and spices such as
          lemongrass, galangal, kaffir lime, chili peppers, and coriander are
          key ingredients in Thai cooking and contribute significantly to the
          unique taste.
        </p>
      </div>

      <div className="bg-orange-200 my-auto rounded-3xl p-10 shadow-2xl">
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="h-56 w-full rounded-xl"
              src="https://i.ibb.co/XXbSjVX/Gaeng-Hang-Lae-Curry.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-56 w-full rounded-xl"
              src="https://i.ibb.co/kQ3pN56/Tom-Yum-Goong-Soup.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-56 w-full rounded-xl"
              src="https://i.ibb.co/hCJ9B3H/Pad-Thai-Noodles.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-56 w-full rounded-xl"
              src="https://i.ibb.co/ZXRCBLT/Tom-Yum-Soup.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-56 w-full rounded-xl"
              src="https://i.ibb.co/SwgzxKH/Laab-Gai.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-56 w-full rounded-xl"
              src="https://i.ibb.co/wK7B6Kz/Green-Papaya-Salad.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-56 w-full rounded-xl"
              src="https://i.ibb.co/d02N8Wh/Green-Curry-Chicken.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-56 w-full rounded-xl"
              src="https://i.ibb.co/tmKF3hX/Massaman-Beef-Curry.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-56 w-full rounded-xl"
              src="https://i.ibb.co/9TdGRDr/Mango-Sticky-Rice.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="font-serif font-bold my-6 mx-auto flex gap-8">
        <p className="my-5">
          Thai cuisine is also known for its unique street food culture. Street
          vendors in Thailand offer a variety of quick and affordable dishes
          that are popular with locals and tourists alike. From Pad Thai to Tom
          Yum soup, these street food dishes are a great way to experience the
          diversity of Thai cuisine.
        </p>
        <p className="my-5">
          In conclusion, Thai cuisine is a truly special and unique culinary
          experience. The bold and complex flavors, emphasis on fresh
          ingredients, and health benefits make Thai food a popular choice
          worldwide. Whether you are looking to try new flavors or want to enjoy
          a healthy and flavorful meal, Thai cuisine is definitely worth
          exploring.
        </p>
      </div>
      <hr className="border-orange-500" />
    </div>
  );
};

export default RecipesSlider;
