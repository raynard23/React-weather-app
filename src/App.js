import logo from './logo.svg';
import './App.css';
import React from 'react';
import Search from './Search';
import Current from './Current';
import { useState, useEffect, } from 'react';

// api key = 57e0bb28-bf1d-11ec-8364-0242ac130002-57e0bba0-bf1d-11ec-8364-0242ac130002

function App() {
  const [wData, setwData] = useState('');
  const [city, setCity] = useState('');

 
   
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=4104b4a9e4ef52f40d4722ac1ba994e9`;
  
  useEffect(() => {
    fetch(url)

    .then(res => res.json())
    .then(data=>setwData(data))
    .catch(Error)
  },[city])
 
  
   return (
     <div>
     <h1> Weather app </h1>
     <Search setCity={setCity}/>
     {city && <Current wData={wData}/> }
    
     </div>
   )



    
  // ) 
  
}

export default App;


