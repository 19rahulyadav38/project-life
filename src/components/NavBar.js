import React from "react";
import ApolloLogo from "../../src/Assets/images/svg/ApolloLogo.svg"
import bellIcon from "../../src/Assets/images/svg/bell.svg"
import devider from "../../src/Assets/images/svg/devider.svg"

function NavBar(props) {
  return (
    <div className="w-full flex  justify-between px-8 py-4 shadow-sm bg-white">
      <div className="flex items-center ">
        <img src={ApolloLogo} alt="pic" />
        <p className="mx-5">Apollo Hospital</p>
      </div>
      <div className="flex  items-center  ">
         <img className="mx-5" src={bellIcon} alt="icon"/>

         <img className="hidden md:block" src={devider} alt="icon"/> 
        <div className="mx-5 hidden md:block">{props.doctorName}</div>
         <img  src={props.profile} alt="pic" />
      </div>
    </div>
  );
}
export default NavBar;
