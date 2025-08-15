import React from "react";
import Header from "./Header/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";


function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
