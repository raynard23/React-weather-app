import logo from './logo.svg';
import './App.css';
import React from 'react';
import Search from './Search';
import Current from './Current';
import Five from './Five';
import FiveList from './FiveList';
import { useState, useEffect, } from 'react';
import 'bulma/css/bulma.min.css';

// api key = 57e0bb28-bf1d-11ec-8364-0242ac130002-57e0bba0-bf1d-11ec-8364-0242ac130002

function App() {
  const [wData, setwData] = useState('');
  const [city, setCity] = useState();
  const [fData, setFdata] = useState([])
  

  
   


useEffect(() => {
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=4104b4a9e4ef52f40d4722ac1ba994e9`)
.then(resp => resp.json())
.then(data => {
  setwData(data)
 
  //  console.log("wData", data)
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

   console.log('fData',fData)

  
   return (
     <div>
     <h1> Weather app </h1>
     <Search setCity={setCity}/>
     {city && <Current wData={wData}/> }
     {city && <FiveList fData={fData}/>}
    
     </div>
   )



    
  
  
}

export default App;


