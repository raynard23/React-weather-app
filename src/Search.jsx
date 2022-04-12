import React from "react";
import { useState, useEffect } from 'react';


const Search = () => {
    const [city, setCity] = useState('');
    const onSubmit = e => {
        e.preventDefault()
        console.log(city)
    }


    return (
        <form onSubmit={onSubmit}>
            <input
                type='search'
                className="search-bar"
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                value={city}
            />
            <button
                type="submit"
                onClick={onSubmit}

            >enter</button>
        </form>

    )
}


export default Search;