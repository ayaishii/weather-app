import { useEffect, useState } from "react";
import { FetchWeatherData } from "../FetchWeatherData";

export const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const cityName = "Tokyo";

  useEffect(() => {
    console.log("City Name:", cityName);
    FetchWeatherData(cityName)
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Error fetching weather data:", error));
  }, []);

  return (
    <div>
      <h1>Weather Forecast</h1>
      {weatherData ? (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          {/* 他の天気データを表示する項目を追加 */}
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};
