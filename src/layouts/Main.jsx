import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="container mx-auto ">
      <Navbar></Navbar>

      <Header></Header>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Main;
