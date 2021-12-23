import React from "react";
import eclips from "../../src/Assets/images/svg/eclips.svg"

function CardBG(props){
    return(
        <div className="bg-white  rounded-lg shadow-md px-4 py-2 leading-10 group hover:bg-pink-400">
            <div className="flex justify-between">
                <span className="text-pink-500 text-2xl group-hover:text-white font-semibold">{props.number}</span>
                <span className="relative group-hover:bg-white rounded-lg">
                <img className="" src={props.kit} alt="icon"/>
                <img className="absolute bottom-0 right-0 " src={eclips} alt="dot"/>
                </span>
            </div>
            <span className="font-semibold group-hover:text-white">{props.terms}</span>
        </div>

    )
}
export default CardBG;