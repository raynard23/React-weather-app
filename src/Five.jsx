import React, { useState } from 'react'


const Five = ({ dayData }) => {

  
  let iCon = dayData?.weather?.[0]?.icon;

  

  return (
   
   <div className='fiveDay'>

      <div> Temp: {Math.round(dayData?.main?.temp)}</div>
      <p>Description: {dayData?.weather?.[0]?.description}</p> 
      <img alt="" src={`http://openweathermap.org/img/w/${iCon}.png`} /> 


  </div>

  )
}









export default Five