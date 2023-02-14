import React from "react";
import { Link } from "react-router-dom";
import line from "../../image/line.png";
import videoBg from "../../image/videoBg.png";

function Upcoming() {
  return (
    <div className=" bg-trinity">
      <div className="container px-5 md:px-20 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className=" font-montserrat font-bold text-5xl mb-2">
              Corporate Manners & Environment.
            </h1>
            <h2 className=" font-montserrat font-medium text-xl">
              Instructor : Jhony Deep
            </h2>
          </div>
          <div className=" flex flex-row gap-4">
            <div className=" p-4 md:w-2/4 w-1/2">
              <h4 className=" font-montserrat font-medium text-lg text-primary">
                Start at 20th Dec 2022
              </h4>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h4 className=" font-montserrat font-medium text-lg text-primary">
                Points 05
              </h4>
            </div>
          </div>
          <div className=" flex flex-col justify-start px-5">
            <img src={line} alt="" className=" w-80" />
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full  mt-4 sm:mt-0">
          <div className=" flex flex-col gap-4 mb-4">
            <h2 className=" font-montserrat font-medium text-4xl">
              Upcoming OSH-RTT
            </h2>
            <h4 className=" font-montserrat font-medium text-xl">
              25 People Enrolled
            </h4>
          </div>
          <div className="rounded-lg overflow-hidden cursor-pointer">
            <img
              className="object-cover object-center w-full h-full"
              src={videoBg}
              alt="video"
            />
          </div>

          <div className=" flex flex-col md:flex-row justify-start gap-8 mt-6 items-center">
            <h3 className=" font-montserrat font-semibold text-3xl">
              Only at $5,00
            </h3>
            <Link className="text-white bg-primary border-0 py-2 px-6 focus:outline-none rounded text-2xl font-montserrat font-semibold items-center">
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
