
import { useState } from "react";

import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import HistoricalWeather from "./components/HistoricalWeather";

import "./App.css";

const CURRENT_KEY = import.meta.env.VITE_CURRENT_API_KEY;
const HISTORY_KEY = import.meta.env.VITE_WEEKLY_API_KEY

function App() {

  const [city, setCity] = useState("");

  const [weather, setWeather] = useState(null);

  const [yesterday, setYesterday] = useState(null);

  const [weekly, setWeekly] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");


  // API KEYS

  const CURRENT_KEY = import.meta.env.VITE_CURRENT_API_KEY;

  const YESTERDAY_KEY = import.meta.env.VITE_YESTERDAY_API_KEY;

  const WEEKLY_KEY = import.meta.env.VITE_WEEKLY_API_KEY;


  // FUNCTION TO GET HISTORICAL WEATHER

  async function getHistoricalWeather(lat, lon, date, key) {

    const timestamp = Math.floor(date.getTime() / 1000);

    const url =
      `https://api.openweathermap.org/data/3.0/onecall/timemachine` +
      `?lat=${lat}&lon=${lon}&dt=${timestamp}` +
      `&units=metric&appid=${key}`;

    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Historical weather API failed"
      );
    }

    if (!data.data || data.data.length === 0) {
      throw new Error("No historical weather data found");
    }

    return data.data[0];
  }


  // MAIN SEARCH FUNCTION

  async function searchWeather() {

    if (city.trim() === "") {

      setError("Please enter a city name");

      return;
    }

    setLoading(true);

    setError("");

    setWeather(null);

    setYesterday(null);

    setWeekly([]);


    try {

      // STEP 1: GET CURRENT WEATHER USING CITY NAME

      const currentURL =
        `https://api.openweathermap.org/data/2.5/weather` +
        `?q=${encodeURIComponent(city.trim())}` +
        `&units=metric&appid=${CURRENT_KEY}`;

      const currentResponse = await fetch(currentURL);

      const currentData = await currentResponse.json();

      if (!currentResponse.ok) {

        throw new Error(
          currentData.message || "City not found"
        );

      }

      // Display current weather

      setWeather(currentData);


      // GET LATITUDE AND LONGITUDE

      const lat = currentData.coord.lat;

      const lon = currentData.coord.lon;


      // STEP 2: GET YESTERDAY WEATHER

      const yesterdayDate = new Date();

      yesterdayDate.setDate(yesterdayDate.getDate() - 1);

      yesterdayDate.setHours(12, 0, 0, 0);


      try {

        const yesterdayData = await getHistoricalWeather(
          lat,
          lon,
          yesterdayDate,
          YESTERDAY_KEY
        );

        setYesterday({

          temp: yesterdayData.temp,

          description: yesterdayData.weather[0].description

        });

      }

      catch (err) {

        console.log("Yesterday Error:", err);

        setError(
          "Current weather loaded. Yesterday's data failed: " +
          err.message
        );

      }


      // STEP 3: GET PAST 7 DAYS WEATHER

      try {

        const weeklyData = [];

        for (let i = 1; i <= 7; i++) {

          const date = new Date();

          date.setDate(date.getDate() - i);

          date.setHours(12, 0, 0, 0);


          const result = await getHistoricalWeather(
            lat,
            lon,
            date,
            WEEKLY_KEY
          );


          weeklyData.push({

            date: date.toLocaleDateString("en-IN"),

            temp: result.temp,

            description: result.weather[0].description

          });

        }

        setWeekly(weeklyData);

      }

      catch (err) {

        console.log("Weekly Error:", err);

        setError(
          "Weekly weather data failed: " + err.message
        );

      }

    }

    catch (err) {

      console.log("Weather Error:", err);

      setError(err.message);

    }

    finally {

      setLoading(false);

    }

  }


  // DISPLAY APPLICATION

  return (

    <div className="container">

      <h1>Weather Application</h1>

      <p>Search any city to check its weather</p>


      <SearchBar

        city={city}

        setCity={setCity}

        searchWeather={searchWeather}

      />


      {loading && <h3>Loading weather...</h3>}


      {error && <p className="error">{error}</p>}


      <CurrentWeather

        weather={weather}

      />


      <HistoricalWeather

        yesterday={yesterday}

        weekly={weekly}

      />

    </div>

  );

}

export default App;
