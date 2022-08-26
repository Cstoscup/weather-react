import React from "react";

import "./styles.css";
import Card from "./Card";

export default function App() {
  return (
    <div className="App">
      <Card city="New York" />
      <p><a href="https://github.com/Cstoscup/weather-react" target="_blank" rel="noreferrer">Open-source</a> code, by <a href="https://snazzy-raindrop-534df3.netlify.app" target="_blank" rel="noreferrer">Callie Stoscup</a></p>
    </div>
  );
}
