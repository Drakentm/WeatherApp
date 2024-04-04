import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  // Corrected 'children' prop name
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
  const [place, setPlace] = useState("Jaipur");
  const [location, setLocation] = useState("");

  const fetchWeather = async () => {
    // Renamed function to follow convention
    const options = {
      method: "GET",
      url: "https://visual-crossing-weather.p.rapidapi.com/history",
      params: {
        aggregateHours: "24",
        location: place,
        contentType: "json",
        unitGroup: "metric",
        shortColumnNames: "0",
      },
      headers: {
        "X-RapidAPI-Key": "ec94e2a51emsh2df736f64132674p13b143jsnf1c3e32c429f",
        "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const thisData = (await response.json()).data[place]; // Accessing data correctly
      setLocation(thisData.address);
      setValues(thisData.values);
      setWeather(thisData.values[0]);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [place]); // Run effect only when 'place' changes

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <StateContext.Provider value={{ weather, setPlace, values, location }}>
      {children}
    </StateContext.Provider>
  );
};

export const UseStateContext = () => useContext(StateContext);
