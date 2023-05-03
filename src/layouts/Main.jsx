import React from "react";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router-dom";

const Main = () => {
  const navigation = useNavigation();

  return (
    <div className="container mx-auto ">
      <Navbar></Navbar>

      {/* <div>
        {navigation.state === "loading" ? (
          <button className="btn loading">loading</button>
        ) : (
          <Outlet></Outlet>
        )}
      </div>

 */}


<Mar






      <div>
        {navigation.state === "loading" ? (
          <div className="h-screen flex justify-center items-center">
            <button className="btn btn-accent btn-lg loading justify-center items-center">
              loading
            </button>
          </div>
        ) : (
          <Outlet></Outlet>
        )}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Main;
