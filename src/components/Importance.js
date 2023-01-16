import React from "react";
import importance from "../image/importance.png";
import cepBg from "../image/cepBg.png";

function Importance() {
  return (
    <div>
      <div class="container mx-auto flex px-5 md:px-28 py-10 md:py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p class=" mb-2 leading-relaxed font-montserrat font-semibold text-xl">
            It’s mandatory for every Competent Person to be registered with the
            Malaysian Department of Occupational Safety and Health (DOSH) and
            renew their license every 3 years or face subsequent suspension. You
            are required to undergo CEP training and collect CEP points in order
            to continuously be up to date with the latest trends and
            developments.
            <br />
            <br />
            For instance, a Noise Risk Assessor needs in-depth knowledge of
            Noise Cancellation methods, completing a 10-day course to become a
            Competent Person qualifies him to perform Noise Risk Assessments for
            several industries. This assessment needs set by DOSH and other
            relevant authorities are what makes CEP precisely so crucial.
            <br />
            <br />
            Choosing a CEP course that meets your needs can be challenging but
            our subject matter specific courses just about offer a wide range of
            subjects. MyCEP is sophisticated, diverse, myriad, inclusive,
            innovative, holistic, intriguing and Comprehensively Exclusive !
          </p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:-mt-80">
          <div className="z-10">
            <img class="w-96 h-96" alt="whatIsCep" src={cepBg} />
          </div>
          <div className=" -mt-[360px] z-20">
            <img class="w-96 h-96" alt="whatIsCep" src={importance} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Importance;
