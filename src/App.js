import logo from './logo.svg';
import './App.css';
import React from 'react';
import Search from './Search';
import Current from './Current';
import { useState, useEffect } from 'react';

function App() {
  const [wData, setwData] = useState('');
  const [city, setCity] = useState([]);
  // Dee i got an error, that said that the state had changed from a string to a 
  // something. So i took this string out and added an array. I have no idea wha
  // is actually going on.
  // console.log('working?',city)
  
  
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=4104b4a9e4ef52f40d4722ac1ba994e9`)
    .then(res => res.json())
    .then(data=> setwData(data))
  },[city])
  return (
    <div>
      <div>Weather App</div>
      <Search setCity={setCity}/>
      <Current wData={wData}/>
      {/* passing in setCity so i can change the state */}
    </div>
  )

  
}

export default App;
