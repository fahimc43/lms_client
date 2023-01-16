import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/LOGO.png";
import cart from "../image/cart.png";
import profile from "../image/profile.png";
import menu from "../image/menu.png";

function Navbar() {
  return (
    <nav className=" bg-primary h-[80px] w-full">
      <div className=" container mx-auto flex justify-between p-3">
        <Link to="">
          <img src={logo} alt="logo" className=" w-[149px] h-[57px]" />
        </Link>
        <div className=" flex space-x-7 items-center">
          <Link to="" className=" w-14 h-14 p-4 bg-secondary rounded-full">
            {" "}
            <img src={cart} alt="" className=" w-[21px] h-[21px]" />{" "}
          </Link>
          <Link to="" className=" w-14 h-14 p-4 bg-secondary rounded-full">
            {" "}
            <img src={profile} alt="" className=" w-[21px] h-[21px]" />{" "}
          </Link>

          <Link to="" className=" w-14 h-14 p-4 bg-solid-white rounded-full">
            {" "}
            <img src={menu} alt="" className=" w-[21px] h-[21px]" />{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
