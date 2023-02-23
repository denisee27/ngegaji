import React from "react";
import { Outlet } from "react-router-dom";
import Navbars from "../navbar/navbar";

const NavSideLayout = () => (
  <>
    <Navbars />
    <Outlet />
  </>
);

export default NavSideLayout;
