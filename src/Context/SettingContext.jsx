import { createContext, useContext, useState } from "react";

const SettingsContext = createContext();
export const SettingsProvider = ({ children }) => {
  const [units, setUnits] = useState("metric");
  const toggleUnits = () =>
    setUnits((u) => (u === "metric" ? "imperial" : "metric"));
  return (
    <SettingsContext.Provider value={{ units, toggleUnits }}>
      {children}
    </SettingsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSettings = () => useContext(SettingsContext);
