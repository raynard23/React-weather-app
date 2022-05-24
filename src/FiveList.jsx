import React from "react";
import Five from "./Five";
import { useEffect,useState } from "react";

 const FiveList = ({fData}) => {



return(
    <div className="columns">
        {
    fData?.map((ele)=> {
        
        return(
            
   <Five dayData = {ele}/>
   
        )
      
    })
}

</div>
)
}

export default FiveList 