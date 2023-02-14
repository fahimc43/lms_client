import React from "react";
import cepBg from "../image/cepBg.png";

function AboutCepDetails({ result }) {
  const { detail, img } = result;
  return (
    <div>
      <div className="container mx-auto flex px-5 md:px-20 py-10 md:py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className=" mb-2 leading-relaxed font-montserrat font-semibold text-xl">
            {detail}
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div className="z-30">
            <img className="w-96 h-96" alt="whatIsCep" src={cepBg} />
          </div>
          <div className=" -mt-[360px] z-20">
            <img className="w-96 h-96" alt="whatIsCep" src={img} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCepDetails;
