import './currentforecast.css';

export const CurrentForecast = ({ data, isCel }) => {
  return (
    <header className='current-forecast'>
      <h1>{data.location.name}</h1>
      {isCel ? (
        <h2>{data.current.temp_c} °C</h2>
      ) : (
        <h2>{data.current.temp_f} °F</h2>
      )}
      <img
        src={data.current.condition.icon}
        alt={data.current.condition.text}
      />
      <h3>{data.current.condition.text}</h3>
    </header>
  );
}
