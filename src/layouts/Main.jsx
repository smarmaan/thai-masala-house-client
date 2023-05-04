import React from "react";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import TimeMarquee from "../pages/Shared/Time Marquee/TimeMarquee";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Main = () => {
  const { loading } = useContext(AuthContext);

  return (
    <div className={`container mx-auto`}>
      
      {(loading && (
        <div className="h-screen flex justify-center items-center">
          <button className="btn btn-accent btn-lg loading justify-center items-center">
            loading
          </button>
        </div>
      )) || (
        <div>
          <Navbar></Navbar>

          {/* <TimeMarquee></TimeMarquee> */}

          <Outlet></Outlet>

          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default Main;
