import React from 'react'
import { useState, useEffect, } from 'react';

const Five = ({fData}) => {
    


// console.log(fData)
 let iCon = fData?.daily?.[0].weather?.[0]?.icon;



     return (
      <div>
        <div> Temp: {Math.round(fData?.daily?.[0].temp.day)}</div>
         <p>Description: {fData?.daily?.[0].weather?.[0]?.main}</p> 
         <img src ={`http://openweathermap.org/img/w/${iCon}.png`}/> 


     </div>
   
     )
}









export default Five