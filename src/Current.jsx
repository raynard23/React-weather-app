import React from "react";
import Five from "./Five";

const Current = ({wData}) => {

 console.log(wData.coord.lat)


  
  return (
    

       <div>
         <h3>City Name: {wData?.name}</h3>
         <h4>Temperature:{wData?.main?.temp}</h4>
         <h4>Description:{wData?.weather?.[0]?.description}</h4>
         <img src ={wData?.weather?.[0].icon}/>
        
  {/* {wData && <Five wData={wData}/>} */}

        </div>
  )
}

export default Current 