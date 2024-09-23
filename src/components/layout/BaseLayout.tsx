import React from "react";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className=' min-h-screen'>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
