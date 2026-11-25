
function SearchBar({ city, setCity, searchWeather }) {

  return (
    <div className="search">

      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchWeather();
          }
        }}
      />

      <button onClick={searchWeather}>
        Search
      </button>

    </div>
  );
}

export default SearchBar;
