import React from "react";
import "./weatherdetails.css";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails">
      <span>{props.description}</span>
      <br />
      Humidity: <span>{props.humidity}</span>%<br />
      Wind Speed: <span>{props.wind}</span>
      <span>mph</span>
    </div>
  );
}
