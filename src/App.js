import logo from './logo.svg';
import './App.css';
import React from 'react';
import Search from './Search';
import Current from './Current';
import Five from './Five';
import { useState, useEffect, } from 'react';

// api key = 57e0bb28-bf1d-11ec-8364-0242ac130002-57e0bba0-bf1d-11ec-8364-0242ac130002

function App() {
  const [wData, setwData] = useState('');
  const [city, setCity] = useState('');
  const [fData, setFdata] = useState('')

  
   


useEffect(() => {
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=4104b4a9e4ef52f40d4722ac1ba994e9`)
.then(resp => resp.json())
.then(data => {
  setwData(data)
 
   console.log("wData", data)
  fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${data.coord?.lat}&lon=${data.coord?.lon}&units=imperial&exclude=hourly&appid=4104b4a9e4ef52f40d4722ac1ba994e9`)
  .then(resp => resp.json())
  .then(data => setFdata(data))
})

  },[city])
  
 
  
   return (
     <div>
     <h1> Weather app </h1>
     <Search setCity={setCity}/>
     {city && <Current wData={wData}/> }
     {city && <Five fData={fData}/>}
    
     </div>
   )



    
  
  
}

export default App;


