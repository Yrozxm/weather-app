import { useState } from "react";
import axios from "axios";
export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const fetchWeather = async () => {
    const key = "SUA_API_KEY";
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
    setWeather(res.data);
  };
  return (
    <div className="text-center mt-10">
      <input value={city} onChange={e => setCity(e.target.value)} className="p-2 border rounded" />
      <button onClick={fetchWeather} className="ml-2 p-2 bg-blue-500 text-white rounded">Search</button>
      {weather && <div className="mt-4">
        <h2 className="text-xl">{weather.name}</h2>
        <p>{weather.main.temp} °C</p>
        <p>{weather.weather[0].description}</p>
      </div>}
    </div>
  );
}
