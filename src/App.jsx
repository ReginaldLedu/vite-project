import { useState, useEffect } from "react";
import { List } from "./components/List";
import { Error } from "./components/Error";
import { CurrentWeather } from "./components/CurrentWeather";
import { getData } from "./helpers/helpers";
import { Search } from "./components/Search";

function App() {
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState({
    dt: 0,
    list: [],
    city: {},
    cnt: 0,
  });
  const [weather, setWeather] = useState([]);
  const [currentWeather, setCurrentWeather] = useState([]);
  const [error, setError] = useState(false);
  const APIKey = "72a8287f040c69bbe9524b6d94ece76f";

  const onClick = () => {
    setError(false);
    setWeather([]);
    setCurrentWeather([]);
    try {
      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIKey}`,
      )
        .then((data) => data.json())
        .then((resp) => {
          if (resp.length > 0) {
            fetch(
              `https://api.openweathermap.org/data/2.5/forecast?lat=${resp[0].lat}&lon=${resp[0].lon}&appid=${APIKey}`,
            )
              .then((data) => data.json())
              .then((weather) => {
                setCurrentWeather(getData(weather.list[0]));
                setCityData(weather);
              });
          } else {
            setError(true);
          }
        });
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    const weatherForUseState = cityData.list.map((item) => getData(item));
    const weatherForUseStateFiltered = weatherForUseState.filter(
      (item) => item.hours === 12,
    );

    setWeather(weatherForUseStateFiltered);
  }, [cityData]);

  return (
    <>
      <Search city={city} setCity={setCity} onClick={onClick} />
      {error === true ? <Error /> : " "}
      <CurrentWeather currentWeather={currentWeather} />
      <List weather={weather} city={cityData} />
    </>
  );
}

export default App;
