import React from "react";
import "./weathericon.css";
import image from "./images/01d.svg";

export default function WeatherIcon() {
  return (
    <img
      src={image}
      alt="weather icon"
      className="WeatherIcon current-weather-icon"
    />
  );
}
