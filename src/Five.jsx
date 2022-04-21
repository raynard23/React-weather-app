import React from 'react'
import { useState, useEffect, } from 'react';

const Five = ({wData}) => {
    const [fData, setFdata] = useState('')
  const lat = wData?.coord?.lat;
  const lon = wData?.coord?.lon;

    useEffect(() =>{
        fetch( `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly&appid=4104b4a9e4ef52f40d4722ac1ba994e9`)
        .then(resp => resp.json())
        .then (data => setFdata(data))
    },[lat]
    )
    console.log(fData)
    // return (

    //     // Date 
    //     // temp 
    //     // icon
    //     // description
    //     // 
    //     <div>{}</div>
    // )
}









export default Five