import logo from './logo.svg';
import './App.css';
import React from 'react';
import Search from './Search';
import { useState, useEffect } from 'react';

function App() {
  const [data ,setData ] = useState(''); 
 

  
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Search}&units=imperial&appid=4104b4a9e4ef52f40d4722ac1ba994e9`)
    .then(res => res.json())
    .then(data=>console.log(data))
  },[])
  return (
    <div>
      <div>Weather App</div>
      <Search/>
    </div>
  )
  
  
}

export default App;
