import React from "react";


const Current = ({setwData,wData}) => {
     console.log('data',wData)
return (
    <div>
   <h1 className = 'cityname'>{wData.name}</h1>
   <p className = 'temp'>80°</p>
   <p className = 'description'>Fing hott</p>
   </div>
)
}

export default Current 