import React from "react";
function ChartCard(props){
    return(

        <div className="flex flex-col rounded-md bg-white p-5 leading-10 shadow-md">
        <div className="flex flex-row items-end justify-around ">
          <div className="">
            <span className="text-pink-500 text-3xl font-semibold ">{props.count}</span>
            <br />
            <span className="font-semibold">{props.total}</span>
          </div>

          <img className="" src={props.chart} alt="chart" />
          
        </div>
        <div className="flex justify-around ">
          <span className="flex items-center">
            <img src={props.dotType1} alt="dot"/>
            <h1 className="pl-2">{props.chartNumber1}</h1>
          </span>
          <span className="flex items-center">
            <img src={props.dotType2} alt="dot"/>
            <h1 className="pl-2">{props.chartNumber2}</h1>
          </span>
        </div>
      </div>
    )
}
export default ChartCard;