import React from "react";
import Search from "./Search";
import { useState } from "react";
const LocalList = ({gStorage, city}) => {
  
 const list = Object.entries(gStorage)


 return (
  list.map(ele => {
    return <button><ol>{ele.splice(1,1)}</ol></button>
   })
    
 )
}

export default LocalList