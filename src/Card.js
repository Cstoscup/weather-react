import React, {useState} from "react";
import "./card.css";
import SearchBar from "./SearchBar";
import City from "./City";
import DateTime from "./DateTime";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import WeatherDetails from "./WeatherDetails";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

export default function Card() {
  const [weather, setWeather] = useState("");
  const [loaded, setLoaded] = useState(false);

  if (loaded === false) {
    getWeather();
  }
  function getWeather() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=9ed24e5c436afdb265857268e29a26c9&units=imperial`;
    axios.get(url).then(displayWeather);
  }
  
  function displayWeather(response) {
    setLoaded(true);
    console.log(response.data)
    setWeather({
      city: response.data.name,
      date: "Wednesday 8:15 AM",
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: 80,
      wind: 4
    });
  }

    return (
      <div className="card">
        <div className="card-body">
          <SearchBar />
          <City city={weather.city} />
          <DateTime date={weather.date} />
          <div className="d-flex WeatherInfo mt-4">
            <WeatherIcon />
            <Temperature temp={Math.round(weather.temp)} />
            <WeatherDetails
              description={weather.description}
              humidity={weather.humidity}
              wind={weather.wind}
            />
          </div>
          <hr />
        </div>
      </div>
    );
}
