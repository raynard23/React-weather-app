import React from "react";
import { useState, useEffect } from 'react';
// import localStorage from "./localStorage";
// passing in the data that i want to set
const Search = ({setCity , city}) => {
  
   
  
    // creating a new state for the data 
    const [inputData ,setInputData ] = useState(''); 
    let local; 
  
    const onSubmit = e => {
        
          e.preventDefault()
      
       setCity(inputData)
       let gStorage = JSON.parse(localStorage.getItem('city')) || [];
    //    why does this not work without that array symbol 
    
       gStorage.push(inputData)
        local =  localStorage.setItem('city',JSON.stringify(gStorage))

     
    
    
    }
   

    return (
    <div>
        <form className="form" onSubmit={onSubmit}>
            <input 
                type='search'
                className="search-bar "
                onChange={(e) => setInputData(e.target.value)}
                placeholder="Enter city name"
                 value={inputData}
            />
            <button className="button is-black is-small"
                type="submit"
                onClick={onSubmit}

            >enter</button> 
            
        </form> 
      
</div>
    )
}


export default Search;