import React, { useState , useEffect } from 'react'
import CountryD from './CountryD';
import './CountryStyle.css'
export default function Country() {
    const [Country, setCountry] = useState([])
    const [data, setdata] = useState(0)
    function addCountry(){
        setdata(data+1)
    }
    function removeCountry(){
        if(data==0)
         return 0
        setdata(data-1)
    }
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res=>res.json())
        .then(data=>setCountry(data))
        .catch(error=>console.log(error))
    }, [])
    return (
        <div className="country-display">
            <div className="country-details">
                <h1>This is Country name:{Country.name}</h1>
                <div>
                    {
                        Country.map(Country=><CountryD Country={Country} addCountry={addCountry} removeCountry={removeCountry}></CountryD>)
                    }
                </div>
            </div>
            <div className="cart-style">
            <h1>CHOOSE SUMMERY</h1>
            <h3>Choose Total Countery:{data}</h3>
            </div>
        </div>
    )
}
