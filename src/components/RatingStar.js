import React from "react";

function RatingStar({ index }) {
  return (
    <>
      <svg
        key={index}
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
    </>
  );
}

export default RatingStar;
