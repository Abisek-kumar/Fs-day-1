
function CurrentWeather({ weather }) {

  if (!weather) {
    return null;
  }

  return (
    <div className="weather-card">

      <h2>{weather.name}, {weather.sys.country}</h2>

      <h1>{Math.round(weather.main.temp)}°C</h1>

      <h3>{weather.weather[0].description}</h3>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="Weather icon"
      />

      <p>
        Feels Like: {Math.round(weather.main.feels_like)}°C
      </p>

      <p>
        Humidity: {weather.main.humidity}%
      </p>

      <p>
        Wind Speed: {weather.wind.speed} m/s
      </p>

      <p>
        Pressure: {weather.main.pressure} hPa
      </p>

    </div>
  );
}

export default CurrentWeather;
