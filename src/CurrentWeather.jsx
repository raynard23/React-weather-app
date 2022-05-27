import React from "react";

const Current = ({currentWeather, fiveDayWeather}) => {


  let iconImg = currentWeather.weather?.[0].icon;
  const uv = Math.round(fiveDayWeather[0]?.uvi)
  console.log(uv)
  let color;
  if (uv < 4) {
    color = "green"
    
  } else if (uv > 4 && uv < 7) {
    color = 'blue'
  } else {
    color = 'red'
  }

  return (
    

       <div className=" current">
         <h3>City Name:  {currentWeather?.name}</h3>
         <h4>Temperature: {Math.round(currentWeather?.main?.temp)}</h4>
         <h4>Description: {currentWeather?.weather?.[0]?.description}</h4>
         <img alt = "" src ={`http://openweathermap.org/img/w/${iconImg}.png`}/> 
         <h4 >Uv Index: <span className={color}>{uv}</span></h4>


        </div>
  )
}

export default Current 