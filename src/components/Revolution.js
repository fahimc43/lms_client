import React from "react";
import revolu from "../image/revolu.png";
import cepBg from "../image/cepBg.png";

function Revolution() {
  return (
    <div>
      <div className="container mx-auto flex px-5 md:px-20 py-10 md:py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className=" mb-2 leading-relaxed font-montserrat font-semibold text-xl">
            Whatever industry you work in, Safety & Health can represent a
            grueling challenge with complex issues that change over time in
            certain fields of the industry. Continuous Education therefore
            cannot remain static and redundant. MyCEPPoints aims to
            revolutionise this ever changing program with the help of subject
            specific experts.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div className="z-10">
            <img className="w-96 h-96" alt="whatIsCep" src={cepBg} />
          </div>
          <div className=" -mt-[360px] z-20">
            <img className="w-96 h-96" alt="whatIsCep" src={revolu} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Revolution;
