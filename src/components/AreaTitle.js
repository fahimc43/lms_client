import React from "react";
import leftAng from "../../src/image/leftAng.png";
import rightAng from "../../src/image/rightAng.png";

function AreaTitle({ title }) {
  return (
    <div className=" flex flex-col items-center justify-center my-20">
      <h2 className=" font-montserrat font-medium text-4xl">{title}</h2>
      <div className=" flex flex-row mt-2 space-x-2">
        <img src={leftAng} alt="left" className=" w-52 h-6" />
        <img src={rightAng} alt="right" className=" w-24 h-6" />
      </div>
    </div>
  );
}

export default AreaTitle;
