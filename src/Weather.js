import React, {useState, useEffect} from "react";
import axios from "axios";
import "./weather.css";
import 'bootstrap/dist/css/bootstrap.css';
import { RotatingLines } from 'react-loader-spinner'
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weather, setWeather] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  const [cityButton, setCityButton] = useState("");

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9ed24e5c436afdb265857268e29a26c9&units=imperial`
    axios.get(apiUrl).then(handleResponse);
  }

  function searchButton() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityButton}&appid=9ed24e5c436afdb265857268e29a26c9&units=imperial`
    axios.get(apiUrl).then(handleResponse);
  }

  function searchCoords(coordinates) {
    let long = coordinates[1];
    let lat = coordinates[0];
    let apiKey = "9ed24e5c436afdb265857268e29a26c9";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(handleResponse);
}

  function handleChange(event) {
    event.preventDefault();
    setCity(event.target.value)
  }
  
  function handleClick(event) {
    event.preventDefault();
    search();
  }

  function handleClickCityButton(event) {
    setCityButton(event.target.name) 
  }

  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getCoordinates)
  }

  function getCoordinates(position) {
    let coordinates = [position.coords.latitude, position.coords.longitude];
    searchCoords(coordinates)
}

  useEffect(() => {
    searchButton();
}, [cityButton]);

  if (weather.ready) {
    return (
      <div className="Weather card">
        <div className="card-body">
          <form className="search">
            <input
              type="search"
              className="search-bar"
              placeholder="Enter a location"
              onChange={handleChange}
            />
            <input
              type="submit"
              className="btn btn-secondary shadow-sm search-button"
              value="Search"
              onClick={handleClick}
            />
            <button className="btn btn-outline-secondary shadow-sm location-button" onClick={getLocation}>
              <i className="fa-solid fa-location-dot"></i>
            </button>
          </form>
          <WeatherInfo data={weather}/>
          <hr />
          <WeatherForecast data={weather}/>
          <hr />
          <div className="d-flex justify-content-around">
            <button className="btn btn-secondary city-button" name="Paris" onClick={handleClickCityButton}>Paris</button>
            <button className="btn btn-secondary city-button" name="Sydney" onClick={handleClickCityButton}>Sydney</button>
            <button className="btn btn-secondary city-button" name="Tokyo" onClick={handleClickCityButton}>Tokyo</button>
            <button className="btn btn-secondary city-button" name="New York" onClick={handleClickCityButton}>New York</button>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return (<RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="48"
      visible={true}
    />)
  }

  function handleResponse(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon
    });
  }
  
}
