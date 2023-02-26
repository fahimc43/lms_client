import React from "react";
import { useQuery } from "react-query";
import AreaTitle from "../../components/AreaTitle";
import InstructorCard from "../../components/InstructorCard";

function Instructors() {
  const { data } = useQuery("instructor", () =>
    fetch("instructorsData.json").then((res) => res.json())
  );

  // const myArray = ["a", "b", "c", "d", "e", "g"];

  // function isOdd(number) {
  //   return number % 2 === 1;
  // }

  // console.log(isOdd(0));

  //   console.log(data);
  return (
    <div>
      <AreaTitle title={"Expert Instructors"} />
      <div className="container mx-auto px-20">
        {data?.map((ins, index) => (
          <InstructorCard key={index} ins={ins} index={index} />
        ))}
      </div>
      <div className=" flex flex-row justify-center">
        <button className="ins-button flex flex-row justify-center items-center gap-3">
          <span>View All</span>{" "}
          <svg
            width="32"
            height="16"
            viewBox="0 0 32 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.7071 8.70711C32.0976 8.31658 32.0976 7.68342 31.7071 7.29289L25.3431 0.928932C24.9526 0.538408 24.3195 0.538408 23.9289 0.928932C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM0 9H31V7H0V9Z"
              fill="white"
            />
          </svg>{" "}
        </button>
      </div>
    </div>
  );
}

export default Instructors;
