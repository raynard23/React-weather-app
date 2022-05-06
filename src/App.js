import logo from './logo.svg';
import './App.css';
import React from 'react';
import Search from './Search';
import Current from './Current';
import Five from './Five';
import FiveList from './FiveList';
import { useState, useEffect, } from 'react';
import 'bulma/css/bulma.min.css';
 import CityList from './CityList';


function App() {
  const [wData, setwData] = useState('');
  const [city, setCity] = useState();
  const [fData, setFdata] = useState([])
 
  
useEffect(() => {
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=4104b4a9e4ef52f40d4722ac1ba994e9`)
.then(resp => resp.json())
.then(data => {
  setwData(data)
 
  fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${data.coord?.lat}&lon=${data.coord?.lon}&units=imperial&exclude=hourly&appid=4104b4a9e4ef52f40d4722ac1ba994e9`)
  .then(resp => resp.json())
  .then(data => {
    let fiveArray = []
    for(let i = 1 ; i <= 5; i++ ){
     fiveArray.push(data.list[i])
     
   }
   setFdata(fiveArray)
  })

})

  },[city])

// console.log("search",searchHistory)
  
   return (
     <div className='has-background '>
     <h1 className='title' >  Weather app </h1>
     <Search setCity={setCity}/>
     {city && <Current wData={wData}/> }
    
     {city && <CityList wData={wData}/> }
     {city && <FiveList fData={fData}/>}
    
     </div>
   )



    
  
  
}

export default App;


