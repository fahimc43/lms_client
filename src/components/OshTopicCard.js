import React from "react";

function OshTopicCard(props) {
  const { classQty, image, instructor, name, newPrice, time } = props.topic;
  console.log(name);
  return (
    <div className=" mb-10 flex flex-row justify-center items-center">
      <div className=" w-[360px] flex flex-col gap-2">
        <img src={image} alt="rectangle" width={360} height={300} />
        <div className=" flex justify-between">
          <p className="offer-card-head">Total class : {classQty}</p>{" "}
          <p className="offer-card-head">{time}</p>{" "}
        </div>
        <h5 className="offer-card-title">{name}</h5>

        <h5 className="offer-card-author">{instructor}</h5>
        <div className=" flex flex-row justify-between">
          <p className="offer-card-price-2">{newPrice}</p>
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

export default OshTopicCard;
