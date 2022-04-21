import React from "react";

const Current = ({wData}) => {

 


  
  return (
    

       <div>
         <h3>City Name: {wData?.name}</h3>
         <h4>Temperature:{wData?.main?.temp}</h4>
         <h4>Description:{wData?.weather?.[0]?.description}</h4>
         <img src ={wData?.weather?.[0].icon}/>

        </div>
  )
}

export default Current 