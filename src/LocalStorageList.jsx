import React from "react";





const LocalStorageList = ({gStorage,setCity}) => {
  
const listSearch = e => {
 setCity(e.target.innerText)
 } 

 let listItems = gStorage.map(ele => {
  return <a onClick={listSearch}>
    <li className="hisList"key={ele.innerText}>{ele}  </li></a>
    })


const clear = () => {
  localStorage.clear()
  // let lis = document.querySelectorAll('.hisList').style.display = 'none' ; 
  // console.log('this',lis)
}
 
return (
<div>
   <div className="History-Box">{listItems}</div>
   <button onClick={clear}>Delete List </button>
</div>
  
)
 
 
 
    
  
}

export default LocalStorageList