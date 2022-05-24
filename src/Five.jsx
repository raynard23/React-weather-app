import React, { useState } from 'react'


const Five = ({ dayData }) => {

  // console.log('temp',dayData)
  let iCon = dayData?.weather?.[0]?.icon;;

  

  return (
   
   <div className='column'>
    

      <div > Temp: {Math.round(dayData?.temp?.day)}</div>
      <p>Description: {dayData?.weather?.[0]?.description}</p> 
      <img alt="" src={`http://openweathermap.org/img/w/${iCon}.png`} /> 
     

  </div>

  )
}









export default Five