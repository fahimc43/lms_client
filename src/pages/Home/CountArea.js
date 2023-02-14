import React from "react";
import stackBooks from "../../image/stackBooks.svg";

function CountArea() {
  return (
    <div>
      <div className="count-area mt-[138px] py-24">
        <div className=" flex container mx-auto -mt-48">
          <img src={stackBooks} alt="" />
        </div>
        <div className=" container flex flex-wrap -m-4 mx-auto justify-center gap-10 mt-10">
          <div className="count-card flex flex-col justify-center items-center">
            <h4 className="count-num">10000+</h4>
            <h5 className="count-name">Particiepent</h5>
          </div>
          <div className="count-card flex flex-col justify-center items-center">
            <h4 className="count-num">100+</h4>
            <h5 className="count-name">Courses</h5>
          </div>
          <div className="count-card flex flex-col justify-center items-center">
            <h4 className="count-num">50+</h4>
            <h5 className="count-name">Instructors</h5>
          </div>
          <div className="count-card flex flex-col justify-center items-center">
            <h4 className="count-num">100+</h4>
            <h5 className="count-name">OSH-RTT</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountArea;
