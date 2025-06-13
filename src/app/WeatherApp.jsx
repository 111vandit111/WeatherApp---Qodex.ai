import { useState } from 'react';
import { Loader, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { SAVED_CITIES_KEY } from '../constants';
import SearchInput from './components/SearchInput';
import { ForecastWeather } from './components/ForecastWeather';
import CurrentWeather from './components/CurrentWeather';
import { useCurrentWeather } from '../Hooks/ClientQueries';
import { getImageByDayType } from '../utils/utils';
import { useSettings } from '../context/SettingContext';

const WeatherDashboard = () => {
  const [currentCity, setCurrentCity] = useState(localStorage.getItem(SAVED_CITIES_KEY) || 'London');
  const { units, toggleUnits } = useSettings();
  const { user , signOut } = useAuth();
  const { data } = useCurrentWeather(currentCity);

  const handleCitySearch = async (city) => {
    setCurrentCity(city);
    localStorage.setItem(SAVED_CITIES_KEY, city);
  };

  return (
<div className="app-screen">
  <img src={getImageByDayType(data?.weather[0].icon)} alt="Weather Dashboard Background" className="app-bg" />
  <div className="app-container">
    <header className="dashboard-header">
      <div className="branding">
        <h1 className="app-title">Weather Dashboard</h1>
        <p className="app-subtitle">Submission By Vandit Kala</p>
      </div>

      <div className="header-actions">
        <button className="btn unit-toggle" onClick={toggleUnits}>
          {units === 'metric' ? '°C' : '°F'}
        </button>

        <div className="user-info">
          <User className="icon sm" />
          <span>{user?.user_metadata?.name || user?.email}</span>
        </div>

        <button className="btn signout-btn" onClick={signOut}>
          <LogOut className="icon sm" />
        </button>
      </div>
    </header>

    <SearchInput onSearch={handleCitySearch} />

    <div className="block-spacing">
      <CurrentWeather city={currentCity} />
    </div>

    <ForecastWeather city={currentCity} />
  </div>
</div>

  );
};

const WeatherApp = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="screen">
        <Loader className="icon lg spin" />
      </div>
    );
  }

  return  <WeatherDashboard />;
};

export default WeatherApp;