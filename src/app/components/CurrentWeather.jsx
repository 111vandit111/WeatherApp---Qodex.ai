import { AlertCircle, ArrowDown, ArrowUp, Droplets, Eye, Loader, Sunrise, Sunset, Thermometer, Wind } from 'lucide-react';
import React from 'react'
import { useSettings } from '../../Context/Settings';
import { useCurrentWeather } from '../../Hooks/ClientQueries';
import { WeatherIcon } from './WeatherIcon';
import { ERROR_MESSAGES_TO_ICONS } from '../../constants';
import ErrorDisplay from './ErrorDisplay';
import { StatBlock } from './StatBlock';

const CurrentWeather = ({ city }) => {
  const { units } = useSettings();
  const { data, error, isLoading } = useCurrentWeather(city);

  if (isLoading) {
    return (
      <div className="card loading-card">
          <Loader className="icon lg spin" />
          <p>Loading weather data...</p>
        </div>
    );
  }

  if (error) return <ErrorDisplay error={error} />

  if (!data) return null;

  const unitSymbol = units === 'metric' ? '°C' : '°F';
  const windUnit = units === 'metric' ? 'm/s' : 'mph';

  return (
    <div className="card weather-card">
        <h2 className="location">
          {data.name}, {data.country}
        </h2>
        <p className="description">{data.weather[0].description}</p>

         <WeatherIcon icon={data.weather[0].icon} size="xxl" />

        <div className="temp">
          {Math.round(data.main.temp)}{unitSymbol}
        </div>
        <p className="feels">
          Feels like {Math.round(data.main.feels_like)}{unitSymbol}
        </p>

       <div className="stats-grid">
        <StatBlock icon={<ArrowUp />}   label="High"      value={Math.round(data.main.temp_max)+windUnit}/>
        <StatBlock icon={<ArrowDown />} label="Low"       value={Math.round(data.main.temp_min)+windUnit}/>
        <StatBlock icon={<Droplets />}  label="Humidity"  value={data.main.humidity+'%'}/>
        <StatBlock icon={<Wind />}      label="Wind"      value={Math.round(data.wind.speed)+' '+
                                                              (units==='metric'?'m/s':'mph')}/>
        <StatBlock icon={<Eye />}       label="Visibility"value={Math.round(data.visibility/1000)+' km'}/>
        <StatBlock icon={<Thermometer/>}label="Pressure"  value={data.main.pressure+' hPa'}/>
        <StatBlock icon={<Sunrise />}   label="Sunrise"   value={new Date(data.sys.sunrise*1000)
                                                              .toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}/>
        <StatBlock icon={<Sunset />}    label="Sunset"    value={new Date(data.sys.sunset*1000)
                                                              .toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}/>
      </div>
    </div>
  );
};

export default CurrentWeather