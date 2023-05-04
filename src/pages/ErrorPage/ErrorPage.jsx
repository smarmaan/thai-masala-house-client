import React from "react";
import { Link } from "react-router-dom";
import error from "../../../public/imageError.png";

const ErrorPage = () => {
  return (
    <section className="">
      
      <div
        class="card card-compact mx-auto
         text-center bg-orange-100 shadow-xl"
      >
        <figure className="">
          <img src={error} className="w-[60%] rounded-3xl" alt="" />
        </figure>

        <div class="card-body items-center">
          <div className="max-w-md text-center">
            <Link
              to="/"
              className="btn px-8 py-3 font-semibold rounded-xl  text-white"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
