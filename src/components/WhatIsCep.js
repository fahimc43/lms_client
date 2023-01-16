import React from "react";
import whatIsCep from "../image/whatIsCep.png";
import cepBg from "../image/cepBg.png";

function WhatIsCep() {
  return (
    <div>
      <div class="container mx-auto flex px-5 md:px-28 py-10 md:py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p class=" mb-2 leading-relaxed font-montserrat font-semibold text-xl">
            Our “Continuous Education Program” was specifically created to
            provide personnel like safety and health officers, CHRA assessors,
            hygiene technicians 1, 2, NRA, IAQ assessors, and major hazards
            competent persons with the opportunity to enhance, enrich, and
            update their knowledge and skills.
          </p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div className="z-30">
            <img class="w-96 h-96" alt="whatIsCep" src={cepBg} />
          </div>
          <div className=" -mt-[360px] z-20">
            <img class="w-96 h-96" alt="whatIsCep" src={whatIsCep} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatIsCep;
