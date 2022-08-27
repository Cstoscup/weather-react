import React from "react";
import DateTime from "./DateTime";
import "./weather.css";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1 className="city mt-2">{props.data.city}</h1>
            <DateTime response={props.data}/>
            <div className="d-flex mt-4">
                <img src={`images/${props.data.icon}.svg`} alt={props.data.icon} className="current-weather-icon"/>
                <WeatherTemperature temp={props.data.temperature}/>
                <div className="weather-details">
                    <span className="text-capitalize">{props.data.description}</span>
                    <br />
                    Humidity: <span>{props.data.humidity}</span>%<br />
                    Wind Speed: <span>{props.data.wind}</span>
                    <span> mph</span>
                </div>
            </div>
        </div>
    )
}