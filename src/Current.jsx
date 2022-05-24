import React from "react";

const Current = ({wData, fData}) => {

 
   let iconImg = wData?.weather?.[0].icon;
const uv = Math.round(fData?.[0]?.uvi)

if (uv < 4 ){
  document.getElementById("uv").style.color = "green"
  console.log('green')
} else if (uv > 4 && uv <  7) {
  console.log("blue")
  document.getElementById("uv").style.color = "blue"
}else {
  document.getElementById("uv").style.color = "red"
}

  return (
    

       <div className=" current">
         <h3>City Name:  {wData?.name}</h3>
         <h4>Temperature: {Math.round(wData?.main?.temp)}</h4>
         <h4>Description: {wData?.weather?.[0]?.description}</h4>
         <img alt = "" src ={`http://openweathermap.org/img/w/${iconImg}.png`}/> 
         <h4 >Uv Index: <span id="uv">{uv}</span></h4>


        </div>
  )
}

export default Current 