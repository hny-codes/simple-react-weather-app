import Forecast from '../forecast/forecast';
import './forecastList.css';

export const ForecastList = ({ data, isCel }) => {
  return (
    <div className='forecast-list'>
      <Forecast
        date={data.forecast.forecastday[0].date}
        cel={data.forecast.forecastday[0].day.avgtemp_c}
        fah={data.forecast.forecastday[0].day.avgtemp_f}
        lowCel={data.forecast.forecastday[0].day.mintemp_c}
        highCel={data.forecast.forecastday[0].day.maxtemp_c}
        lowFah={data.forecast.forecastday[0].day.mintemp_f}
        highFah={data.forecast.forecastday[0].day.maxtemp_f}
        image={data.forecast.forecastday[0].day.condition.icon}
        isCel={isCel}
      />
      <Forecast
        date={data.forecast.forecastday[1].date}
        cel={data.forecast.forecastday[1].day.avgtemp_c}
        fah={data.forecast.forecastday[1].day.avgtemp_f}
        lowCel={data.forecast.forecastday[1].day.mintemp_c}
        highCel={data.forecast.forecastday[1].day.maxtemp_c}
        lowFah={data.forecast.forecastday[1].day.mintemp_f}
        highFah={data.forecast.forecastday[1].day.maxtemp_f}
        image={data.forecast.forecastday[1].day.condition.icon}
        isCel={isCel}
      />
      <Forecast
        date={data.forecast.forecastday[2].date}
        cel={data.forecast.forecastday[2].day.avgtemp_c}
        fah={data.forecast.forecastday[2].day.avgtemp_f}
        lowCel={data.forecast.forecastday[2].day.mintemp_c}
        highCel={data.forecast.forecastday[2].day.maxtemp_c}
        lowFah={data.forecast.forecastday[2].day.mintemp_f}
        highFah={data.forecast.forecastday[2].day.maxtemp_f}
        image={data.forecast.forecastday[2].day.condition.icon}
        isCel={isCel}
      />
      <Forecast
        date={data.forecast.forecastday[3].date}
        cel={data.forecast.forecastday[3].day.avgtemp_c}
        fah={data.forecast.forecastday[3].day.avgtemp_f}
        lowCel={data.forecast.forecastday[3].day.mintemp_c}
        highCel={data.forecast.forecastday[3].day.maxtemp_c}
        lowFah={data.forecast.forecastday[3].day.mintemp_f}
        highFah={data.forecast.forecastday[3].day.maxtemp_f}
        image={data.forecast.forecastday[3].day.condition.icon}
        isCel={isCel}
      />
      <Forecast
        date={data.forecast.forecastday[4].date}
        cel={data.forecast.forecastday[4].day.avgtemp_c}
        fah={data.forecast.forecastday[4].day.avgtemp_f}
        lowCel={data.forecast.forecastday[4].day.mintemp_c}
        highCel={data.forecast.forecastday[4].day.maxtemp_c}
        lowFah={data.forecast.forecastday[4].day.mintemp_f}
        highFah={data.forecast.forecastday[4].day.maxtemp_f}
        image={data.forecast.forecastday[4].day.condition.icon}
        isCel={isCel}
      />
    </div>
  );
};
