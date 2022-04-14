import React from "react";


const Current = ({setwData,wData}) => {
 
return (
    <div>
   <h1 className = 'cityname'>{wData.name}</h1>
   {/* <p className = 'temp'>{wData.main.temp}</p> */}
   {/* <p className = 'description'>{wData.weatehr.description}</p> */}
   </div>
)
}

export default Current 