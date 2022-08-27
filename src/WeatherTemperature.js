import React, {useState} from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("fahrenheit")

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    if (unit === "celsius") {
        let celsius = (props.temp - 32) * 5 / 9;
        return (
            <h1 className="temp">
                {Math.round(celsius)}
                <span className="temp-unit">
                    <a href="/" onClick={showFahrenheit}>°F</a> | °C
                </span>
            </h1>
            )
    }

    if (unit === "fahrenheit") {
        return (
            <h1 className="temp">
                {Math.round(props.temp)}
                <span className="temp-unit">
                    °F | <a href="/" onClick={showCelsius}>°C</a>
                </span>
            </h1>
            )
    }

}