import React from "react";

const Current = ({wData}) => {

 
   let iconImg = wData?.weather?.[0].icon;

  
  return (
    

       <div className=" current">
         <h3>City Name:  {wData?.name}</h3>
         <h4>Temperature: {Math.round(wData?.main?.temp)}</h4>
         <h4>Description: {wData?.weather?.[0]?.description}</h4>
         <img alt = "" src ={`http://openweathermap.org/img/w/${iconImg}.png`}/> 
       


        </div>
  )
}

export default Current 