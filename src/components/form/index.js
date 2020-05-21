import React, { useState } from "react";
import weatherServices from "../../services/weather-services";

export default function Form({ setWeather }) {
  const [city, setCity] = useState("");
  const fetchWeather = async (event) => {
    event.preventDefault();
    const result = await weatherServices.getWeatherByCity(city);
    setWeather(result.weather);
  };

  return (
    <form onSubmit={fetchWeather}>
      <label>
        Cidade:
        <input
          data-testid="city-name-input"
          value={city}
          title="cidade"
          type="text"
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <input data-testid="submit" type="submit" value="Submit" />
    </form>
  );
}
