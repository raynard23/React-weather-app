import React from "react";

const Current = ({wData, fData}) => {

 
   let iconImg = wData?.weather?.[0].icon;

  // console.log(fData?.)
  return (
    

       <div className=" current">
         <h3>City Name:  {wData?.name}</h3>
         <h4>Temperature: {Math.round(wData?.main?.temp)}</h4>
         <h4>Description: {wData?.weather?.[0]?.description}</h4>
         <img alt = "" src ={`http://openweathermap.org/img/w/${iconImg}.png`}/> 
         <h4>Uv Index: </h4>


        </div>
  )
}

export default Current 