import React, {useState} from "react";

export default function WeatherTemperature(props) {    
    return (
        <h1 className="temp">
            {Math.round(props.temp)}
            <span className="temp-unit">°F</span>
        </h1>
            )
}