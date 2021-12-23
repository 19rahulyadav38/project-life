import React from "react";
import CardBG from "./CardBG";
import ChartCard from "./ChartCard";
import firstAidKit from "../../src/Assets/images/svg/firstAidKit.svg";
import gynaecology from "../../src/Assets/images/svg/gynaecology.svg";
import patient from "../../src/Assets/images/svg/patient.svg";
import fetus from "../../src/Assets/images/svg/fetus.svg";
import chart15 from "../../src/Assets/images/svg/chart15.svg";
import chart45 from "../../src/Assets/images/svg/chart45.svg";
import dotYellow from "../../src/Assets/images/svg/dotYellow.svg"
import dotPink from "../../src/Assets/images/svg/dotPink.svg"
import dotDarkBlue from "../../src/Assets/images/svg/dotDarkBlue.svg"
import dotBlue from "../../src/Assets/images/svg/dotBlue.svg"

function DashboardCard() {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 mx-8 py-2">
      <div className="grid grid-rows-2 gap-5">
        <CardBG number={"213"} kit={firstAidKit} terms={"Appointments"}  />
        <CardBG number={"100"} kit={gynaecology} terms={"Gynaecology patients"} />
      </div>

      <div className="grid grid-rows-2 gap-5">
        <CardBG number="104" kit={patient} terms={"Admitted"} />
        <CardBG number="28" kit={fetus} terms={"Obstetric patients"} />
      </div>

      <div>
        <ChartCard count={45} total={"Total Deliveries"} dotType1={dotYellow} chartNumber1={"Veginal 15"}  dotType2={dotPink} chartNumber2={"Surgical 30"} chart={chart45}  />
      </div>

      <div>
        <ChartCard count={15} total={"Emergencies"} dotType1={dotDarkBlue} chartNumber1={"Operative 5"}  dotType2={dotBlue} chartNumber2={"Gynaecological 10"} chart={chart15} />
      </div>
    </div>
    
    
    </>
  );
}
export default DashboardCard;
