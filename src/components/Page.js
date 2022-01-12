import React from "react";
import SideBar from "./SideBar";
import Dashboard from "./Dashboard"

function Page() {
  return (
    <>
    <div className="w-full h-full ">
      <div className="flex">
      <div className="md:w-5/6 w-full "> 
          <Dashboard />
        </div>
        <div className="w-1/6 hidden md:block">
          <SideBar/>
        </div>
        
      </div>
      
    </div>

    </>
  );
}

export default Page;
