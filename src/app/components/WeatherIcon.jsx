import { Cloud, CloudRain, CloudSnow, Sun } from "lucide-react";

export const WeatherIcon = ({ icon, size = 'w-16 h-16' }) => {
  const iconMap = {
    '01d': Sun, '01n': Sun,
    '02d': Cloud, '02n': Cloud,
    '03d': Cloud, '03n': Cloud,
    '04d': Cloud, '04n': Cloud,
    '09d': CloudRain, '09n': CloudRain,
    '10d': CloudRain, '10n': CloudRain,
    '11d': CloudRain, '11n': CloudRain,
    '13d': CloudSnow, '13n': CloudSnow,
    '50d': Cloud, '50n': Cloud
  };
  
  const IconComponent = iconMap[icon] || Cloud;
  
  return <IconComponent className={`icon ${size} accent`} />;
};
