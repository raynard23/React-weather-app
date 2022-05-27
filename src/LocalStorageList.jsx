import React from "react";
import { useState } from "react";




const LocalStorageList = ({gStorage,setCity,}) => {
  const [visible, setVisible] = useState(true);
const listSearch = e => {
 setCity(e.target.innerText)
 } 

 let listItems = gStorage.map((ele , index) => {
  return (
    <a onClick={listSearch}  key={index}> <li value={visible} > {ele}</li> </a>
  )
    })

   
const clear = () => {
  localStorage.clear()
  window.location.reload()
  setCity()
   //i am a hundred percent positive there is another way to do this, i was just getting a bit tired. 
}
 
return (
<div>
   <ol className="History-Box">{listItems}</ol>
   <button onClick={clear}>Delete List </button>
</div>
  
)
 
 
 
    
  
}

export default LocalStorageList