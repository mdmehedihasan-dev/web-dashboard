import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/shared/NavBar";
import Footer from "../../Components/shared/Footer";

const HomeLayout = () => {
  return (
    <div className="overflow-x-hidden bg-white">
      <div>
      <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
