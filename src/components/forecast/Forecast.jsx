import { useState } from 'react';
import './forecast.css';

const Forecast = ({
  date,
  temp,
  cel,
  highCel,
  lowCel,
  fah,
  highFah,
  lowFah,
  image,
  isCel,
}) => {
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
    <div className='forecast-wrapper'>
      <div className='forecast'>
        <div className='forecast-day'>
          <h3>{handleDayOfWeek(date)}</h3>
          <p>{date}</p>
        </div>
        <div className='forecast-temp'>
          {isCel ? (
            <h3>
              <span className='min-temp'>{`${lowCel} °C`}</span> / <span>{`${highCel} °C`}</span>
            </h3>
          ) : (
            <h3>
              <span className='min-temp'>{`${lowFah} °F`}</span> / <span>{`${highFah} °F`}</span>
            </h3>
          )}
        </div>
        <div className='forecast-image'>
          <img src={image} alt='forecast image' />
        </div>
      </div>
    </div>
  );
};

export default Forecast;
