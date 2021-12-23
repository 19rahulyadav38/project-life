import React from "react";
import dashboardLogo from "../../src/Assets/images/svg/dashboardLogo.svg";
import hospital from "../../src/Assets/images/svg/hospital.svg";
import patientManagement from "../../src/Assets/images/svg/patientManagement.svg";
import patientAdd from "../../src/Assets/images/svg/patientAdd.svg";
import round from "../../src/Assets/images/svg/round.svg";
import reports from "../../src/Assets/images/svg/reports.svg";
import dotGray from "../../src/Assets/images/svg/dotGray.svg";
import bar from "../../src/Assets/images/svg/bar.svg";
import questionMark from "../../src/Assets/images/svg/questionMark.svg"

function SideBar() {
  return (

      <div className="px-4 shadow-xl pt-7 h-full ">
      <div className="flex justify-between ">
        <p className="font-semibold">Project Life</p>
        <img src={bar} alt="bar" />
      </div>
      <div className="mt-12 leading-10">
        <div className="inline-flex items-center">
          <img src={dashboardLogo} alt="logo" />
          <span className="pl-3">Dashboard</span>
        </div>
        <div className="inline-flex items-baseline">
          <img src={hospital} alt="logo" />

          <div>
            <span className="pl-3">Manage Hospital</span>
            <ul className="list-inside list-disc">
              <li>Staff</li>
              <li>Addmission Areas</li>
            </ul>
          </div>
        </div>
        <div className="inline-flex items-center">
          <img src={patientManagement} alt="logo" />

          <span className="pl-3">Patient Management </span>
        </div>
        <div className="flex items-center">
          <img src={patientAdd} alt="logo" />

          <span className="pl-3">Add patient</span>
        </div>
        <div className="flex items-center">
          <img src={reports} alt="logo" />

          <span className="pl-3"> Reports</span>
        </div>
        <div className="flex items-center">
          <img src={round} alt="" />

          <span className="pl-3"> Rounds </span>
        </div>
        <hr />
      </div>
      <div className="flex items-center pt-8">
          <img src={questionMark} alt="" />

          <span className="pl-3"> Help and Supports </span>
        </div>
      </div>
  );
}

export default SideBar;
