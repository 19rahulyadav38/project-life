import React from "react";
import NavBar from "./NavBar";
import DateTime from "./DateTime";
import DashboardCard from "./DashboardCard";
import avatar from "../../src/Assets/images/svg/photo1.svg";
import PatientCard from "./PatientCard";


function Dashboard(){
    return(
        <div className="" style={{ backgroundColor: "#F9F9F9" }}>


          <NavBar profile={avatar} doctorName={"Dr. Pradeep Kumar"} />
          <DateTime />
          <DashboardCard />
          <PatientCard/>


        </div>
    )
}

export default Dashboard;