import React from "react";


const Current = ({wData}) => {
 console.log("weather",wData.weather[0].description)
return (
    <div>
   <h1 className = 'cityname'>{wData.name}</h1>
   <p className = 'temp'>{wData.main.temp}</p>
   <p className = 'description'>{wData.weather[0].description}</p>
   </div>
)
}

export default Current 