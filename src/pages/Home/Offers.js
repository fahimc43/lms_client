import React from "react";
import AreaTitle from "../../components/AreaTitle";
import rectangle from "../../image/rectangle.png";

function Offers() {
  return (
    <div>
      <div>
        <AreaTitle title={"Special Offers"} />
        <div className=" flex justify-center my-10">
          <div className=" w-[400px] flex flex-col gap-3 border">
            <img src={rectangle} alt="rectangle" width={400} height={320} />
            <div className=" flex justify-between">
              <p className="offer-card-head">Total class : 15</p>{" "}
              <p className="offer-card-head">06 hrs 30 mnts</p>{" "}
            </div>
            <h5 className="offer-card-title">
              Crisis management effective decision making.
            </h5>
            <div className=" flex flex-row">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 0L13.59 6.26L20.5 7.27L15.5 12.14L16.68 19.02L10.5 15.77L4.32 19.02L5.5 12.14L0.5 7.27L7.41 6.26L10.5 0Z"
                  fill="#FEBF1C"
                />
              </svg>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 0L13.59 6.26L20.5 7.27L15.5 12.14L16.68 19.02L10.5 15.77L4.32 19.02L5.5 12.14L0.5 7.27L7.41 6.26L10.5 0Z"
                  fill="#FEBF1C"
                />
              </svg>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 0L13.59 6.26L20.5 7.27L15.5 12.14L16.68 19.02L10.5 15.77L4.32 19.02L5.5 12.14L0.5 7.27L7.41 6.26L10.5 0Z"
                  fill="#FEBF1C"
                />
              </svg>
            </div>
            <h5 className="offer-card-author">Instructor : Anthony James</h5>
            <div className=" flex flex-row justify-between">
              <div className=" flex flex-row space-x-3 items-center">
                <p className="offer-card-price-1">20,000</p>
                <p className="offer-card-price-2">12,000</p>
              </div>
              <div>
                <button className="offer-card-button">
                  {" "}
                  <span className="offer-card-button-title">
                    Add to card
                  </span>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
