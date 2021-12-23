import React from "react";
import { Link } from "react-router-dom";

function Demo(){
    return(
        <div>
            
            <Link to="/"><p>Click me</p></Link>
            <h1>This is Demo page</h1>
        </div>
    )
}

export default Demo;