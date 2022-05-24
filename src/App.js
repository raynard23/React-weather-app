import logo from './logo.svg';
import './App.css';
import React from 'react';
import Search from './Search';
import Current from './Current';
import Five from './Five';
import FiveList from './FiveList';
import { useState, useEffect, } from 'react';
import 'bulma/css/bulma.min.css';
import LocalList from './LocalList';
// import LocalClear from './LocalClear';


function App() {
  const [wData, setwData] = useState('');
  const [city, setCity] = useState();
  const [fData, setFdata] = useState([])
  
  let gStorage = JSON.parse(localStorage.getItem('city')) || [];
  
useEffect(() => {
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=4104b4a9e4ef52f40d4722ac1ba994e9`)
.then(resp => resp.json())
.then(data => {
  setwData(data)

  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord?.lat}&lon=${data.coord?.lon}&units=imperial&exclude=minutely,hourly,alerts&appid=4104b4a9e4ef52f40d4722ac1ba994e9`)
  .then(resp => resp.json())
  .then(data => {
    
    let fiveArray = []
    for(let i = 1 ; i <= 5; i++ ){
     
       fiveArray.push(data.daily[i])
     
   }
   setFdata(fiveArray)
   
  })

})

  },[city])

  const clear = () => {
    localStorage.clear()
    console.log(localStorage)
    // LocalList.style.visibility = hidden
  }
   return (
     <div className='has-background '>
     <h1 className='title' >  Weather app </h1>
     <Search setCity={setCity}/>
     {city && <Current wData={wData} fData={fData}/> }
    
     <button onClick={clear}>Clear List </button>
     { gStorage && <LocalList gStorage={gStorage} setCity={setCity}/>}
     
     {city && <FiveList fData={fData}/>}
    
     </div>
   )



    
  
  
}

export default App;


