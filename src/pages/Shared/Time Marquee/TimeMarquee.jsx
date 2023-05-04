import React from "react";

import moment from "moment";
import Marquee from "react-fast-marquee";

import {
  FaFacebookSquare,
  FaFacebookMessenger,
  FaDiscord,
  FaInstagramSquare,
} from "react-icons/fa";

import { HiEnvelope } from "react-icons/hi2";
import { RiWhatsappFill } from "react-icons/ri";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const TimeMarquee = () => {
  return (
    <div className="card h-56 bg-orange-200 mx-auto my-16 text-gray-800">
      <div className="card-body items-center text-center">
        <h1 className="text-center text-2xl md:text-4xl font-serif font-extrabold ">
          {" "}
          {moment().format("dddd, MMMM Do YYYY ")}{" "}
        </h1>
        <Marquee
          className="font-bold mt-5 py-3  rounded-full bg-[#f5b04c]"
          speed={120}
        >
          <p className=" text-xl md:text-2xl  mx-10 ">
            Experience the Authentic Flavors of Thailand{" "}
          </p>
          <p className=" text-xl md:text-2xl  mx-10 ">
            Spice Up Your Life with Thai Masala House{" "}
          </p>
          <p className=" text-xl md:text-2xl  mx-10 ">
            From our kitchen to yours.
          </p>
          <p className=" text-xl md:text-2xl mx-10 ">
            Cook up a storm with us!{" "}
          </p>
          <p className=" text-xl md:text-2xl mx-10 ">
            Where food meets creativity.{" "}
          </p>
          <p className=" text-xl md:text-2xl mx-10 ">
            Unleash your inner chef.
          </p>
          <p className=" text-xl md:text-2xl mx-10 ">
            Explore the flavors of the world.
          </p>
        </Marquee>
      </div>

      <Marquee
        className="font-bold py-6  rounded-b-2xl bg-[#f5b04c]"
        speed={90}
      >
        <p className=" text-xl md:text-2xl  mx-10 ">Contact us with.... </p>
        <p className=" text-xl md:text-2xl  mx-10 ">www.thaimasalahouse.com </p>
        <p className=" text-xl md:text-2xl  mx-10 flex items-center gap-20">
          thaimasalahouse@gmail.com
          <Link to="https://mail.google.com/mail/u/0/#inbox?compose=new">
            <HiEnvelope className="text-4xl" />
          </Link>
          <Link to="https://www.facebook.com/">
            <FaFacebookSquare className="text-4xl" />
          </Link>
          <Link to="https://www.facebook.com/messages/t/">
            <FaFacebookMessenger className="text-4xl" />
          </Link>
          <Link to="https://www.instagram.com/">
            <FaInstagramSquare className="text-4xl" />
          </Link>
          <Link to="https://discord.com/">
            <FaDiscord className="text-4xl" />
          </Link>
          <Link to="https://twitter.com/">
            <BsTwitter className="text-4xl" />
          </Link>
          <Link to="https://www.youtube.com/">
            <BsYoutube className="text-4xl" />
          </Link>
          <Link to="https://www.whatsapp.com/">
            <RiWhatsappFill className="text-4xl" />
          </Link>
        </p>
      </Marquee>
    </div>
  );
};

export default TimeMarquee;
