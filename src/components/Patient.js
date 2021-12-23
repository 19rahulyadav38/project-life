import React from "react";
import bar from "../../src/Assets/images/svg/verticalDots.svg";
import flag from "../../src/Assets/images/svg/flag.svg";
import pdf from "../../src/Assets/images/svg/pdf.svg";
import notes1 from "../../src/Assets/images/svg/notes1.svg";
import notes2 from "../../src/Assets/images/svg/notes2.svg";

function Patient(props) {
  return (
    <div className="shadow-lg flex flex-col ">
      <div className="bg-pink-100 rounded-tr-md rounded-tl-md py-2 ">
        <div className=" flex justify-end mx-2">
          <img className="mx-2" src={flag} alt="" />
          <img className="mx-2" src={bar} alt="" />
        </div>
        <div className="flex  justify-evenly leading-8 pr-8">
          <img src={props.photo} alt="" />
          <span className="">
            <span className="text-md font-semibold">{props.ptName}</span>  
            <br />
            Patient ID: <span className="text-gray-400">{props.ptID}</span>
          </span>
          <span className="">
            <br />
            CR No.:<span className="text-gray-400">{props.crNo}</span>
          </span>
        </div>
      </div> 
      <div className="px-6 py-2 rounded-br-md rounded-bl-md bg-white">
        <div className=" flex flex-nowrap justify-between leading-8">
          <span>
            <span className="text-gray-400">Age</span> <br />
            <span>{props.age}</span>
          </span>
          <span>
            <span className="text-gray-400">Sex</span> <br />
            <span>{props.sex}</span>
          </span>
          <span>
            <span className="text-gray-400">Weight</span> <br />
            <span>{props.weight}</span>
          </span>
          <span>
            <span className="text-gray-400">Height</span> <br />
            <span>{props.height}</span>
          </span>
        </div>
        <div className=" leading-8">
          <span>
            <span className="text-gray-400">Doctor</span>
            <br />
            <span>{props.doctorName}</span>
            <br />
            <span className="inline-flex">
              Reports <img className="mx-5" src={pdf} alt="pdf" />
            </span>
          </span>
        </div>
        <div className=" flex justify-end">
          <img className="mx-3" src={notes1} alt="pic" />
          <img src={notes2} alt="pic" />
        </div>
      </div>
    </div>
  );
}

export default Patient;
