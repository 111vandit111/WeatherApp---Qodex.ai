/* React query hooks — just wrappers around the API helpers */
import { useQuery } from '@tanstack/react-query';
import { useSettings } from '../Context/Settings';
import {
  getCurrentWeather,
  getForecast,
  searchCities,
} from '../api/Weather';

export const useCurrentWeather = (city) => {
  const { units } = useSettings();
  const query = useQuery({
    queryKey: ['weather', city, units],
    queryFn:  () => getCurrentWeather(city, units),
    enabled:  Boolean(city),
    staleTime: 30_000,   
    retry: 1,
    retryDelay: 2_000,
    refetchInterval: (query) => {
      return query.state.error ? false : 30_000;
    },
    refetchOnWindowFocus: false,
  });
  return query; 
};

export const useForecastWeather = (city) => {
  const { units } = useSettings();
  const query = useQuery({
    queryKey: ['forecast', city, units],
    queryFn:  () => getForecast(city, units),
    enabled:  Boolean(city),
    staleTime: 10 * 60_000,
    retry: 1,
    retryDelay: 2_000,
    refetchOnWindowFocus: false,
    refetchOnMount:       false,
    refetchInterval:      false, 
  });
  return query;
};

export const useCitySearch = (searchTerm) => {
  const query = useQuery({
    queryKey: ['city-search', searchTerm],
    queryFn:  () => searchCities(searchTerm),
    enabled:  Boolean(searchTerm?.length >= 2),
    staleTime: 5 * 60_000,   
  });
  return query;
};
