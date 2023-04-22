import { useState, useEffect } from 'react';
import './App.css';
import { ForecastList } from './components/forecastList/ForecastList';
import { CurrentForecast } from './components/currentForecast/CurrentForecast';
import { SearchBar } from './components/search/SearchBar';

function App() {
  const [location, setLocation] = useState('London');
  const [data, setData] = useState('');
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState('');
  const [isCel, setIsCel] = useState(false);
  const DAYS = 5;
  const API_CALL = `http://api.weatherapi.com/v1/forecast.json?key=${
    import.meta.env.VITE_API_KEY
  }&q=${location}&days=${DAYS}&aqi=no&alerts=no`;

  useEffect(() => {
    console.log(import.meta.env.VITE_API_KEY);
    fetch(API_CALL, { mode: 'cors' })
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(response);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setIsError(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsError(true);
        error.json().then((body) => setError(body.error.message));
      });
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(search);
  };

  return (
    <div className='App'>
      <SearchBar handleSearch={handleSearch} handleSubmit={handleSubmit} />
      {isError ? (
        <h1>An error occured: {error}</h1>
      ) : !data ? (
        <p>Loading...</p>
      ) : (
        <main className='weather'>
          <CurrentForecast data={data} isCel={isCel} />
          <ForecastList data={data} isCel={isCel} />
        </main>
      )}
    </div>
  );
}

export default App;
