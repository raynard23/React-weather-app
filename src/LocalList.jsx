import React from "react";
import Search from "./Search";
import { useState } from "react";



const LocalList = ({gStorage,setCity}) => {

 const list = Object.entries(gStorage)
 if(gStorage.length >= 1 ){
   console.log(true)
  }else {
    console.log(false,list)}
const listSearch = e => {
 setCity(e.target.innerText)
 } 

  return (
    list.map(ele => {
      return <a onClick={listSearch}>
        <li className = "hisList">{ele.splice(1, 1)}</li></a>
    })
    
  )
}

export default LocalList