import React from "react";
function DateTime() {
  return (
    <div className="flex flex-col justify-between my-4 mx-6">
      <span className="font-semibold text-lg py-1">Dashboard</span>
      <div className="flex items-center">
        <span className="">Date</span>
        <input
          className="w-28 shadow-md px-3 py-1 rounded-2xl  mx-2 outline-none"
          placeholder="From"
          type="text"
          name=""
          value=""
        />
        <input
          className=" w-28 shadow-md px-3 py-1 rounded-2xl  mx-2 outline-none"
          placeholder="To"
          type="text"
          name=""
          value=""
        />{" "}
      </div>
    </div>
  );
}

export default DateTime;
