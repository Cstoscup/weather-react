import React, { useState } from "react";
import "./weather.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay"

export default function WeatherForecast(props) {
    const [ready, setReady] = useState(false)
    const [forecast, setForecast] = useState({});
    
    function displayForecast(response) {
        setForecast(response.data.daily);
        setReady(true);
    }

    if (ready) {
        return(
            <div className="row">
                <div className="col">
                    <WeatherForecastDay data={forecast[0]} />
                </div>
            </div>
        )
    } else {
        let long = props.data.lon;
        let lat = props.data.lat;
        let apiKey = "9ed24e5c436afdb265857268e29a26c9";
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;
        axios.get(url).then(displayForecast)

        return "Loading...";
    }
}