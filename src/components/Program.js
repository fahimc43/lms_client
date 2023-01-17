import React from "react";

function Program(props) {
  const { name, message, icon, color } = props.program;
  return (
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
      <div className="border-2 border-gray-200 px-4 py-6 rounded-lg flex flex-col justify-center items-center">
        <div
          className=" w-32 h-28 border rounded-lg flex justify-center items-center p-10"
          style={{ background: `#${color}` }}
        >
          <img src={icon} alt="" className=" w-11 h-9" />
        </div>

        <h3 className=" font-montserrat font-semibold text-2xl my-5">{name}</h3>
        <h5 className=" font-montserrat font-medium text-base">{message}</h5>
      </div>
    </div>
  );
}

export default Program;
