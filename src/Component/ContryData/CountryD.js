import React from 'react'
import './CountryStyle.css'
export default function CountryD(props) {
    const {name,population,region,flag}=props.Country
    return (
        <div className="country-details">
            <div className="country-style">
            <h1>{name}</h1>
            <img src={flag} alt=""/>
            <h3>{population}</h3>
            <h4>{region}</h4>
            <button className="btn" onClick={props.addCountry}>Choose</button>
            <button className="btn" onClick={props.removeCountry}>Remove</button>
            </div>
        </div>
    )
}
