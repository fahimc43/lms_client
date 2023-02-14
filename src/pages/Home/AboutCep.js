import React from "react";
import leftAng from "../../image/leftAng.png";
import rightAng from "../../image/rightAng.png";
import { NavLink, Outlet } from "react-router-dom";

function AboutCep() {
  let activeStyle = {
    background: "#FF731D",
    border: 0,
    color: "white",
  };
  return (
    <div className=" mt-16">
      <div className=" flex flex-col items-center justify-center my-20">
        <h2 className=" font-montserrat font-medium text-4xl">
          Learn About CEP
        </h2>
        <div className=" flex flex-row mt-2 space-x-2">
          <img src={leftAng} alt="left" className=" w-52 h-6" />
          <img src={rightAng} alt="right" className=" w-24 h-6" />
        </div>
      </div>
      <div className=" flex flex-col md:flex-row justify-center mt-8 items-center gap-5 md:space-x-24">
        <NavLink
          to="/"
          className="btn-primary"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          What is CEP
        </NavLink>
        <NavLink
          to="/revolution"
          className="btn-primary"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          MYCEP Revolution
        </NavLink>
        <NavLink
          to="/importance"
          className="btn-primary"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Importance of CEP
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default AboutCep;