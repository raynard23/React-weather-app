import React from "react";
import Five from "./FiveDayWeather";
import { useEffect,useState } from "react";

 const FiveList = ({fiveDayWeather}) => {



return(
    <div className="columns">
        {
    fiveDayWeather?.map((ele)=> {
       
        return(
            
   <Five key={ele.dt} dayData = {ele}/>
   
        )
      
    })
}

</div>
)
}

export default FiveList 