import React from "react";

import Patient from "./Patient";
import SearchBar from "./SearchBar";
import avatar2 from "../../src/Assets/images/svg/avatar2.svg";
import avatar3 from "../../src/Assets/images/svg/avatar3.svg";
import avatar4 from "../../src/Assets/images/svg/avatar4.svg";




function PatientCard() {
  return (
    <div className="mx-8 my-2">
      <SearchBar ptType="Gynaecology Patients"/>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          <Patient photo={avatar2} ptName="Dipti Thakur" ptID="PL005" crNo="1" age="30" sex="Female" weight="62" height="160" doctorName="Dr. Christino Murphy"/>
          <Patient photo={avatar3} ptName="Neha Parmar" ptID="PL006" crNo="2" age="28" sex="Female" weight="71" height="172" doctorName="Dr. Pradip Kumar"/>
          <Patient photo={avatar4} ptName="Olisha Sharma" ptID="PL007" crNo="3" age="32" sex="Female" weight="55" height="155" doctorName="Dr. Sonu Kumar"/>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          <Patient photo={avatar3} ptName="Neha Parmar" ptID="PL006" crNo="2" age="28" sex="Female" weight="71" height="172" doctorName="Dr. Pradip Kumar"/>
          <Patient photo={avatar4} ptName="Olisha Sharma" ptID="PL007" crNo="3" age="32" sex="Female" weight="55" height="155" doctorName="Dr. Sonu Kumar"/>
          <Patient photo={avatar2} ptName="Dipti Thakur" ptID="PL005" crNo="1" age="30" sex="Female" weight="62" height="160" doctorName="Dr. Christino Murphy"/>
      </div>
    </div>
  );
}
export default PatientCard;
