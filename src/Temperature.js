import React from "react";
import "./temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <h1 className="temp">
        {props.temp}
        <span className="temp-unit">°F | °C</span>
      </h1>
    </div>
  );
}
