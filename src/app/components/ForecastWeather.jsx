import { Calendar, Loader } from "lucide-react";
import { useSettings } from "../../Context/Settings";
import { useForecastWeather } from "../../Hooks/ClientQueries";
import { WeatherIcon } from "./WeatherIcon";

export const ForecastWeather = ({ city }) => {
  const { units } = useSettings();
  const { data, error, isLoading } = useForecastWeather(city);

  if (isLoading) {
    return (
      <div className="card weather-card">
        <Loader className="icon lg spin" />
        <p>Loading forecast...</p>
      </div>
    );
  }

  if (error || !data) return null;

  const unitSymbol = units === "metric" ? "°C" : "°F";

  return (
    <div className="card forecast-card">
      <h3 className="section-title">
        <Calendar className="icon xl" />
        5‑Day Forecast
      </h3>

      <div className="forecast-grid">
        {data.list.map((item, index) => {
          const date = new Date(item.dt * 1000);
          const dayName =
            index === 0
              ? "Today"
              : date.toLocaleDateString("en", { weekday: "short" });

          return (
            <div key={item.dt} className="forecast-day">
              <div className="day-label">{dayName}</div>

              <WeatherIcon icon={item.weather[0].icon} size="sm" />

              <div className="day-temp-max">
                {Math.round(item.main.temp_max)}
                {unitSymbol}
              </div>

              <div className="day-temp-min">
                {Math.round(item.main.temp_min)}
                {unitSymbol}
              </div>

              <div className="day-condition">{item.weather[0].main}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
