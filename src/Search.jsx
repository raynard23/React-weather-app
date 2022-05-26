import React from "react";
import { useState, useEffect } from 'react';
// import localStorage from "./localStorage";
// passing in the data that i want to set
const Search = ({ setCity , fiveDayWeather}) => {



    // creating a new state for the data 
    const [inputData, setInputData] = useState('');



    const onSubmit = e => {
    
        e.preventDefault()
        //  console.log("onsubmit")
        
        setCity(inputData) 
      
        
          let gStorage = JSON.parse(localStorage.getItem('city')) || [];


            if (!gStorage.includes(inputData) ){
                gStorage.push(inputData)
             
            localStorage.setItem('city', JSON.stringify(gStorage)) 
            }else{
                alert("search a new city , or add a city ")
            }
            setInputData("")
        
         
        

    }
    const clear = () => {
        localStorage.clear()
       
    
        // LocalStorageList.style.visibility = hidden
      }
    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input
                    type='search'
                    className="search-bar "
                    onChange={(e) =>  setInputData(e.target.value)}
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