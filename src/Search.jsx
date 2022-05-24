import React from "react";
import { useState, useEffect } from 'react';
// import localStorage from "./localStorage";
// passing in the data that i want to set
const Search = ({ setCity }) => {



    // creating a new state for the data 
    const [inputData, setInputData] = useState('');



    const onSubmit = e => {
        
        e.preventDefault()
        //  console.log("onsubmit")
        
        setCity(inputData) 
      
         if (e.target.className.includes('is-black')){
          
            setInputData("")
    
            let gStorage = JSON.parse(localStorage.getItem('city')) || [];
    
            gStorage.push(inputData)
           
            localStorage.setItem('city', JSON.stringify(gStorage))
        }
         
        

    }
    const clear = e => {
        
        localStorage.clear()
        // console.log("clear")
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
               
                <button
                    onClick={clear}
                >
                    clear</button>
                    </form>

        </div>
    )
}


export default Search;