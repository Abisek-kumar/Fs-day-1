
function HistoricalWeather({ yesterday, weekly }) {

  return (
    <div className="history">

      <h2>Weather History</h2>

      {/* YESTERDAY */}

      <div className="history-card">

        <h3>Yesterday's Weather</h3>

        {yesterday ? (
          <>
            <h2>{Math.round(yesterday.temp)}°C</h2>
            <p>{yesterday.description}</p>
          </>
        ) : (
          <p>No yesterday data available</p>
        )}

      </div>


      {/* LAST 7 DAYS */}

      <div className="history-card">

        <h3>Past 7 Days</h3>

        {weekly.length > 0 ? (

          weekly.map((day, index) => (

            <div className="day" key={index}>

              <h4>{day.date}</h4>

              <p>{Math.round(day.temp)}°C</p>

              <p>{day.description}</p>

            </div>

          ))

        ) : (
          <p>No weekly data available</p>
        )}

      </div>

    </div>
  );
}

export default HistoricalWeather;
