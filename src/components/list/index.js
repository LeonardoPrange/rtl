import React, { useState } from "react";
import Form from "../form";

export default function List() {
  const [weather, setWeather] = useState([]);
  return (
    <div>
      <Form setWeather={setWeather} />
      <ul>
        {weather.map((w) => (
          <>
            <li>{w.main}</li>
            <li>{w.description}</li>
          </>
        ))}
      </ul>
    </div>
  );
}
