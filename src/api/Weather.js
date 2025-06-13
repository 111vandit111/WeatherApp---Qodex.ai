const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getCurrentWeather = async (city, units = 'metric') => {
  const req = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${OPENWEATHER_API_KEY}&units=${units}`
  );

  if (!req.ok) {
    const msg =
      req.status === 404 ? 'City not found.' :
      req.status === 401 ? 'Invalid API key.' :
      req.status === 429 ? 'Too many requests — try later.' :
      'Failed to fetch weather data.';
    throw new Error(msg);
  }

  const data = await req.json();
  return {
    name: data.name,
    country: data.sys.country,
    coord: data.coord,
    main:  data.main,
    weather: data.weather,
    wind:  data.wind,
    visibility: data.visibility,
    sys:   data.sys,
    dt:    data.dt,
  };
};

export const getForecast = async (city, units = 'metric') => {
  const r = await fetch(
    `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${OPENWEATHER_API_KEY}&units=${units}&cnt=40`
  );

  if (!r.ok) {
    const msg =
      r.status === 404 ? 'City not found.' :
      r.status === 401 ? 'Invalid API key.' :
      r.status === 429 ? 'Too many requests — try later.' :
      'Failed to fetch forecast.';
    throw new Error(msg);
  }

  const data = await r.json();

  const perDay = [];
  const seen   = new Set();
  for (const item of data.list) {
    const date     = new Date(item.dt * 1000);
    const dayKey   = date.toDateString();
    const isNoon   = date.getHours() === 12;

    if (!seen.has(dayKey) || isNoon) {
      if (!seen.has(dayKey)) perDay.push(item);
      else perDay[perDay.findIndex(i =>
              new Date(i.dt * 1000).toDateString() === dayKey)] = item;
      seen.add(dayKey);
    }
    if (perDay.length === 5) break;
  }

  return { list: perDay };
};

export const searchCities = async (query) => {
  const r = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(query)}&limit=5&appid=${OPENWEATHER_API_KEY}`
  );
  if (!r.ok) throw new Error('Failed to search cities');
  const d = await r.json();
  return d.map((c) => ({
    name: c.name,
    state: c.state,
    country: c.country,
    lat: c.lat,
    lon: c.lon,
  }));
};
