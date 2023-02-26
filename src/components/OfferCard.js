import React from "react";
import RatingStar from "./RatingStar";

function OfferCard(props) {
  const {
    name,
    classQty,
    instructor,
    newPrice,
    oldPrice,
    rating,
    time,
    image,
  } = props.offer;
  console.log(name);
  return (
    <div className=" mb-10">
      <div className=" w-[350px] flex flex-col gap-2">
        <img src={image} alt="rectangle" width={400} height={320} />
        <div className=" flex justify-between">
          <p className="offer-card-head">Total class : {classQty}</p>{" "}
          <p className="offer-card-head">{time}</p>{" "}
        </div>
        <h5 className="offer-card-title">{name}</h5>
        <div className=" flex flex-row">
          {[...Array(rating)].map((star, index) => (
            <RatingStar key={index} index={index} />
          ))}
        </div>
        <h5 className="offer-card-author">{instructor}</h5>
        <div className=" flex flex-row justify-between">
          <div className=" flex flex-row space-x-3 items-center">
            <p className="offer-card-price-1">{oldPrice}</p>
            <p className="offer-card-price-2">{newPrice}</p>
          </div>
          <div>
            <button className="offer-card-button">
              {" "}
              <span className="offer-card-button-title">Add to card</span>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
