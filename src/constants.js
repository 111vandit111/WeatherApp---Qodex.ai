import { BookX, OctagonAlert, ShieldX, TimerIcon } from "lucide-react";

export const sessionKey = "session";

export const SAVED_CITIES_KEY = "savedCities";

export const ERROR_MESSAGES_TO_ICONS = {
  'City not found.' : OctagonAlert,
  'Invalid API key.' : ShieldX ,
  'Too many requests — try later.' : TimerIcon ,
  'Failed to fetch weather data.' : BookX 
}