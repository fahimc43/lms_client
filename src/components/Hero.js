import React from "react";
import heroBg from "../image/heroBgnd.png";

function Hero() {
  return (
    <>
      <div className=" bg-secondary text-solid-white w-full">
        <div className=" container mx-auto">
          <div className=" flex flex-col justify-center items-center px-20 gap-8 pt-20">
            <h1 className=" font-anybody font-bold text-5xl">
              CONTINUOUS EDUCATION PROGRAMME
            </h1>
            <p className=" font-montserrat font-medium text-xl text-center">
              MyCEPPoints is pioneering the first platform that understands and
              offers solutions for you to stay in compliance with OSH. We offer
              a wide array of courses, forums, quizzes and everything you need
            </p>
          </div>
          <div>
            <div className="flex flex-col items-center md:flex-row justify-center gap-10 mt-20 pb-20">
              <button className="text-white bg-primary border-0 py-2 px-6 focus:outline-none rounded text-lg w-80 font-montserrat font-semibold items-center">
                Our Courses
              </button>
              <button
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  background: "rgba(255, 255, 255, 0.05)",
                  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
                }}
                className="text-white bg-primary border-0 py-2 px-6 focus:outline-none rounded text-lg w-80 font-montserrat font-semibold items-center"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <img src={heroBg} alt="" className=" w-full -mt-10" />
    </>
  );
}

export default Hero;
