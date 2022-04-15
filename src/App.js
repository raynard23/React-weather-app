import logo from './logo.svg';
import './App.css';
import React from 'react';
import Search from './Search';
import Current from './Current';
import { useState, useEffect, } from 'react';

function App() {
  const [wData, setwData] = useState('');
  const [city, setCity] = useState('');
  // const [loading,setLoading] = useState(null)
  // const [error ,setError] = useState(null)
   
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=4104b4a9e4ef52f40d4722ac1ba994e9`;


  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=4104b4a9e4ef52f40d4722ac1ba994e9`)
    .then(res => res.json())
    .then(data=> setwData(data))
    .catch(Error)
  },[url])
 

   return (
  <div>     
      <div>Weather App</div>
      
      <Search setCity={setCity}/>
      <Current  wData = {wData}/>
     
     </div>
  ) 
  
}

export default App;


