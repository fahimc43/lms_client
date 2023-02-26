import React from "react";

function AreaTitle({ title }) {
  return (
    <div className="  flex flex-col items-center justify-center my-20">
      <h2 style={titleTop}>{title}</h2>
      <div className=" flex flex-row mt-2 space-x-2">
        <svg
          width="220"
          height="25"
          viewBox="0 0 222 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H221V26"
            stroke="#FF731D"
            strok-width="2"
            stroke-linecap="round"
          />
        </svg>
        <svg
          width="102"
          height="26"
          viewBox="0 0 104 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M103 1H1V27"
            stroke="#FF731D"
            strok-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default AreaTitle;

const titleTop = {
  height: "58px",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "42px",
  lineHeight: "58px",
  color: "#202020",
};
