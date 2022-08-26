import React from "react";
import "./weather.css";
import 'bootstrap/dist/css/bootstrap.css';
import image from "./images/01d.svg"

export default function Weather() {
  return (
    <div className="Weather card">
      <div className="card-body">
        <form className="search">
          <input
            type="search"
            className="search-bar"
            placeholder="Enter a location"
            autoFocus="on"
          />
          <input
            type="submit"
            className="btn btn-secondary shadow-sm search-button"
            value="Search"
          />
          <button className="btn btn-outline-secondary shadow-sm location-button">
            <i className="fa-solid fa-location-dot"></i>
          </button>
        </form>
        <h1 className="city mt-2">New York</h1>
        <h5 className="date-time mt-2">Wednesday 5:32 PM</h5>
        <div className="d-flex mt-4">
          <img
          src={image}
          alt="weather icon"
          className="current-weather-icon"
          />
          <h1 className="temp">70<span className="temp-unit">°F</span></h1>
          <div className="weather-details">
            <span>Cloudy</span>
            <br />
            Humidity: <span>56</span>%<br />
            Wind Speed: <span>4</span>
            <span> mph</span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
