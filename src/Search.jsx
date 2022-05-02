import React from "react";
import { useState, useEffect } from 'react';
import localStorage from "./localStorage";
// passing in the data that i want to set
const Search = ({setCity}) => {
  
    // creating a new state for the data 
    const [inputData ,setInputData ] = useState([]); 
  //creating a function so that i can do something with the input
    const onSubmit = e => {
        
        e.preventDefault()
        
       setCity([inputData])
     
    }


    return (
        <form onSubmit={onSubmit}>
            <input 
                type='search'
                className="search-bar is-center"
                onChange={(e) => setInputData(e.target.value)}
                placeholder="Enter city name"
                 value={inputData}
            />
            <button className="button is-black is-small"
                type="submit"
                onClick={onSubmit}

            >enter</button>
        </form>

    )
}


export default Search;