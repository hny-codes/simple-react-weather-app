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
  const [loading, setLoading] = useState('true');
  const [isCel, setIsCel] = useState(false);
  const DAYS = 5;
  const API_CALL = `http://api.weatherapi.com/v1/forecast.json?key=${
    import.meta.env.VITE_API_KEY
  }&q=${location}&days=${DAYS}&aqi=no&alerts=no`;

  useEffect(() => {
    fetch(API_CALL, { mode: 'cors' })
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(response);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsError(false);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsError(true);
        setLoading(false);
        error.json().then((body) => setError(body.error.message));
      });
  }, [location]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(search);
    setLoading(true);
    setIsError(false);
  };

  const handleToggle = (e) => {
    e.preventDefault();
    setIsCel(() => !isCel);
  };

  return (
    <div className='App'>
      <SearchBar
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
        handleToggle={handleToggle}
      />
      {isError ? (
        <h1 className='error-message'>An error occured: {error}</h1>
      ) : loading ? (
        <span className='loader'></span>
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
