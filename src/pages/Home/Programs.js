import React from "react";
import leftAng from "../../image/leftAng.png";
import rightAng from "../../image/rightAng.png";
import laptop from "../../image/laptop.png";
import Program from "../../components/Program";
import training from "../../image/training.png";
import blogs from "../../image/blogs.png";
import quizzes from "../../image/quizzes.png";

function Programs() {
  const programs = [
    {
      id: 1,
      name: "OSH-RTT",
      message:
        "Occupational Safety and Health - Round Table Talk (OSH - RTT) is a initiative meant to gather input from a wide group",
      icon: laptop,
      color: "28C62F",
    },
    {
      id: 2,
      name: "OSH Training",
      message:
        "We provide OSH related training programs with our highly skilled experts tailor made to suit the industry needs",
      icon: training,
      color: "FFBE18",
    },
    {
      id: 3,
      name: "Blogs",
      message:
        "My CEP Points provide interactive blogs to ensure that you are always up to date with our exciting activities",
      icon: blogs,
      color: "28BCC6",
    },
    {
      id: 4,
      name: "Quizzes",
      message:
        "MyCEP Points-provide interesting quizzes to gain your knowledge and make you more understandable about the topics.",
      icon: quizzes,
      color: "28C684",
    },
  ];
  return (
    <div>
      <div className=" flex flex-col items-center justify-center my-20">
        <h2 className=" font-montserrat font-medium text-4xl">Our Programs</h2>
        <div className=" flex flex-row mt-2 space-x-2">
          <img src={leftAng} alt="left" className=" w-52 h-6" />
          <img src={rightAng} alt="right" className=" w-24 h-6" />
        </div>
      </div>
      <div>
        <div className="container px-5 md:px-20 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            {programs.map((program) => (
              <Program key={program.id} program={program} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs;
