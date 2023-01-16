import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function AboutCep() {
  let activeStyle = {
    background: "#FF731D",
    border: 0,
    color: "white",
  };
  return (
    <div className=" mt-16">
      <div className=" flex justify-center md:mb-20">
        <h2 className=" font-montserrat font-medium text-4xl">
          Learn About CEP
        </h2>
      </div>
      <div className=" flex flex-col md:flex-row justify-center mt-8 items-center gap-5 md:space-x-24">
        <NavLink
          exact
          to="/whatIs"
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
