import React from "react";
import RatingStar from "./RatingStar";

function InstructorCard({ index, ins }) {
  const { name, surName, detail, image, rating } = ins;
  console.log(name, index);
  return (
    <>
      <div
        className={`card-instructor h-[450px] md:h-[250px] ${
          index % 2 === 1 ? "flex-row-reverse" : "bg-[#fddcc8] flex-row"
        } flex  justify-around items-center mb-10`}
      >
        <div
          className={`flex ${
            index % 2 === 1
              ? "md:flex-row-reverse flex-col"
              : "md:flex-row flex-col"
          } items-center gap-14`}
        >
          <div>
            <img src={image} alt="Ellipse" width={150} height={150} />
          </div>
          <div
            className={`${
              index % 2 === 1
                ? "md:text-right text-center px-3"
                : "md:text-left text-center px-3"
            }`}
          >
            <h2 className="instructor-name">{name}</h2>
            <h4 className="instructor-title">{surName}</h4>
            <h5 className="instructor-detail">{detail}</h5>
            <div
              className={` hidden md:flex ${
                index % 2 === 1 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {[...Array(rating)].map((star, index) => (
                <RatingStar key={index} index={index} />
              ))}
            </div>
          </div>
        </div>
        <div className=" md:block hidden">
          <img
            src="https://i.ibb.co/n3rfPD3/reward-Right.png"
            alt="rewardRight"
            width={127}
            height={186}
          />
        </div>
      </div>
    </>
  );
}

export default InstructorCard;
