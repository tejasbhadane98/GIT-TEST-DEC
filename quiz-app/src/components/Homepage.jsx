import React from "react";
import {Link} from "react-router-dom";
import Image from "../Image/image.jpg";
const Homepage=()=>{
    return(
        <>
            <div>
        <div>
          <img src={Image} />
        </div>
        <div className="quiz">
          <Link to="/Quiz">
            Enter
          </Link>
          
        </div>
      </div>
        </>
    )
}
export default Homepage;