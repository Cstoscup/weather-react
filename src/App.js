import React from "react";
import Weather from "./Weather";
import "./styles.css"

export default function App() {
  return (
    <div className="App">
      <Weather />
      <p><a href="https://github.com/Cstoscup/weather-react" target="_blank" rel="noreferrer">Open-source</a> code, by <a href="https://snazzy-raindrop-534df3.netlify.app" target="_blank" rel="noreferrer">Callie Stoscup</a></p>
    </div>
  );
}
