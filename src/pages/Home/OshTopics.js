import React from "react";
import AreaTitle from "../../components/AreaTitle";
import rectangle from "../../image/rectangle.png";

function OshTopics() {
  return (
    <div>
      <AreaTitle title={"OSH-RTT Topics"} />
      <div className="container px-0 md:px-20 mx-auto my-10 grid grid-cols-1 md:grid-cols-3 justify-items-center items-center">
        <div className=" mb-10">
          <div className=" w-[380px] flex flex-col gap-2">
            <img src={rectangle} alt="rectangle" width={380} height={300} />
            <div className=" flex justify-between">
              <p className="offer-card-head">Total class : 15</p>{" "}
              <p className="offer-card-head">06 hrs 30 mnts</p>{" "}
            </div>
            <h5 className="offer-card-title">
              Advance diploma in health & safety.
            </h5>

            <h5 className="offer-card-author">Instructor : Anthony James</h5>
            <div className=" flex flex-row justify-between">
              <div className=" flex flex-row space-x-3 items-center">
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

export default OshTopics;
