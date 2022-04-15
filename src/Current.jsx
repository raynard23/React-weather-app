import React from "react";
import Five from "./Five";

const Current = ({wData}) => {
const data = {wData}
console.log(data)
  return (
       <div>
            {/* <Five data ={data}/> */}
        {/* <h2>{wData?.coord?.lat}</h2> */}
        <h1>{wData?.name}</h1>
        <p>{wData?.main?.temp}</p>
        <p>{wData?.weather?.[0]?.description}</p>
      
       </div>
  )
}

export default Current 