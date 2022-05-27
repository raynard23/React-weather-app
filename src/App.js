
import './App.css';
import React from 'react';
import Search from './Search';
import Current from './CurrentWeather';
import FiveList from './FiveList';
import { useState, useEffect,useMemo } from 'react';
import 'bulma/css/bulma.min.css';
import LocalStorageList from './LocalStorageList';
import { data } from 'cheerio/lib/api/attributes';
// import LocalClear from './LocalClear';


function App() {
  const [loading,setLoading]=useState(false)
  const [currentWeather, setCurrentWeather] = useState([]);
  const [city, setCity] = useState();
  const [fiveDayWeather, setFiveDayWeather] = useState([])
  
  let gStorage = JSON.parse(localStorage.getItem('city')) || [];

useEffect(() => {
  setLoading(true)
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=4104b4a9e4ef52f40d4722ac1ba994e9`)
.then(resp => resp.json())
.then(data => {
  console.log(data)
  setCurrentWeather(data)

  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord?.lat}&lon=${data.coord?.lon}&units=imperial&exclude=minutely,hourly,alerts&appid=4104b4a9e4ef52f40d4722ac1ba994e9`)
  .then(resp => resp.json())
  .then(data => {
    
    let fiveArray = []
    for(let i = 1 ; i <= 5; i++ ){
     
       fiveArray.push(data.daily[i])
     
   }
   setFiveDayWeather(fiveArray)
   
  })

}).catch(err =>alert('that is not a valid city'))
setLoading(false)
  },[city])
console.log(city)
  
   return (
     <div className='has-background '>
     <h1 className='title' >  Weather app </h1>
     <Search setCity={setCity} fiveDayWeather ={fiveDayWeather}/>
     {!loading && city && <Current currentWeather={currentWeather} fiveDayWeather={fiveDayWeather}/> }
    
     
     { gStorage.length > 0 &&  <LocalStorageList gStorage={gStorage} setCity={setCity}/>}
     
     {city && <FiveList fiveDayWeather={fiveDayWeather}/>}
    
     </div>
   )



    
  
  
}

export default App;


