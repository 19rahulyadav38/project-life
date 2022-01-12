import React from "react";
import sortSVG from "../../src/Assets/images/svg/sort.svg";
import arrow from "../../src/Assets/images/svg/arrowDown.svg";

function SearchBar( props){

    return(
        <div className="py-2  leading-10">
        <h1 className="font-semibold">{props.ptType}</h1>
        <span className="  ">
          <input
            className="outline-none bg-none border-none rounded-full py-0 shadow-md px-3  mx-2 my-2"
            placeholder="Search"
            type="text"
            name=""
            
          />
        </span>
        <span className="inline-flex items-center  shadow-md  bg-white   rounded-full  mx-2 my-2 text-gray-400 px-3">
          <span className="inline-flex items-center">
            <img className="mx-1" src={sortSVG} alt="pic" />
            <span>Sort by</span>
          </span>
          <span>
            <img className="ml-16" src={arrow} alt="" />
          </span>
        </span>
      </div>
    )
}

export default SearchBar;