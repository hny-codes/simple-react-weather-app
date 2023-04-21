import { useState } from 'react';
import './forecast.css';

const Forecast = ({ date, temp, cel, fah, image }) => {
  const [celseus, setCelseus] = useState(cel);
  const [fahrenheit, setFahrenheit] = useState(fah);

  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  function handleDayOfWeek(date) {
    const month = date.slice(6, 7);
    const day = date.slice(-2);
    const year = date.slice(0, 4);
    return weekdays[new Date(`${month}/${day}/${year}`).getDay()];
  }

  return (
    <div className='forecast'>
      <div className='forecast-day'>
        <h3>{handleDayOfWeek(date)}</h3>
        <p>{date}</p>
      </div>
      <div className='forecast-temp'>
        <h3>{`${celseus} C`}</h3>
      </div>
      <div className='forecast-image'>
        <img src={image} alt='forecast image' />
      </div>
    </div>
  );
};

export default Forecast;
