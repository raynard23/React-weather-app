import React from 'react'
import Current from './Current'
import { useState, useEffect, } from 'react';

const Five = ({wData}) => {
   const [fDay, setFday] = useState('')
   const lat  = wData.coord.lat; 
  const lon = wData.coord.lon; 
   console.log('lat',lat)
   const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly&appid=4104b4a9e4ef52f40d4722ac1ba994e9` 
   

    useEffect((lat, lon) => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly&appid=4104b4a9e4ef52f40d4722ac1ba994e9`)
            .then(res => res.json())
            .then(data => setFday(data))
           
    }, [lat])
    
        //  const daily = fDay.daily;
        // const fDate = new Date(daily[0].dt * 1000).toString();
        //  console.log(fDay)
        // console.log('math',Math.round(daily[0].temp.day))

    return (
        <div>
             {/* <h2>The next five days</h2> */}
            {/* <p>Date:{fDate}</p> */}
            {/* <p> Temperature :{Math.round(daily?.[0]?.temp?.day)} <span>&#176;</span> </p> */}
            {/* <p>Weather Description:{daily?.[0]?.weather?.[0]?.description}</p> */}
            {/* <img src={`http://openweathermap.org/img/wn/${daily[0].weather[0].icon}.png>`}/> */} 
        </div>

    )
}









export default Five