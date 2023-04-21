import Forecast from '../forecast/forecast';

export const ForecastList = ({ data }) => {
  return (
    <div>
      <Forecast
        date={data.forecast.forecastday[0].date}
        cel={data.forecast.forecastday[0].day.avgtemp_c}
        fah={data.forecast.forecastday[0].day.avgtemp_f}
        image={data.forecast.forecastday[0].day.condition.icon}
      />
      <Forecast
        date={data.forecast.forecastday[1].date}
        cel={data.forecast.forecastday[1].day.avgtemp_c}
        fah={data.forecast.forecastday[1].day.avgtemp_f}
        image={data.forecast.forecastday[1].day.condition.icon}
      />
      <Forecast
        date={data.forecast.forecastday[2].date}
        cel={data.forecast.forecastday[2].day.avgtemp_c}
        fah={data.forecast.forecastday[2].day.avgtemp_f}
        image={data.forecast.forecastday[2].day.condition.icon}
      />
      <Forecast
        date={data.forecast.forecastday[3].date}
        cel={data.forecast.forecastday[3].day.avgtemp_c}
        fah={data.forecast.forecastday[3].day.avgtemp_f}
        image={data.forecast.forecastday[3].day.condition.icon}
      />
      <Forecast
        date={data.forecast.forecastday[4].date}
        cel={data.forecast.forecastday[4].day.avgtemp_c}
        fah={data.forecast.forecastday[4].day.avgtemp_f}
        image={data.forecast.forecastday[4].day.condition.icon}
      />
    </div>
  );
};
