import React, { useState } from "react";
import "./App.css";
import Checkboxes from "./components/Checkboxes";
import Box from "./components/Box";

const App = () => {
  const [cities, setCities] = useState([]);
  const [fetchData, setFetchData] = useState([]);
  const citiesData = {
    "Tel Aviv": { lat: 32.0804808, long: 34.7805274 },
    Brasilia: { lat: -10.3333333, long: -53.2 },
    Mumbai: { lat: 18.9387544, long: 72.8352382 },
    Zanzibar: { lat: -6.0988563, long: 39.3204591 },
    London: { lat: 51.5073219, long: -0.1276474 },
    "New York": { lat: 40.7308619, long: -73.9871558 },
    Moscow: { lat: 55.7507178, long: 37.6176606 },
    Berlin: { lat: 52.5244, long: 13.4105 },
    Bangkok: { lat: 13.75398, long: 100.50144 },
    Sydney: { lat: -33.86882, long: 151.20929 }
  };

  const getCityData = city => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${citiesData[city].lat}&lon=${citiesData[city].long}&units=metric&APPID=e0c47889761b3278ec2d153d93e085dc`
    ).then(response => response.json());
  };

  const onFetchData = () => {
    const promises = cities.map(city => {
      return getCityData(city);
    });
    Promise.all([...promises]).then(data => {
      let myData = [];
      data.forEach((city, i) => {
        myData.push({
          city: cities[i],
          temp: city.main.temp
        });
      });
      setFetchData(myData);
    });
  };

  const checkboxChange = e => {
    if (e.target.checked) {
      const newCitiesArr = [...cities, e.target.name];
      setCities(newCitiesArr);
    } else {
      let newCitiesArr = cities.filter(city => city !== e.target.name);
      setCities(newCitiesArr);
    }
  };

  return (
    <div className="App container">
      <h2 className="mt-3">Weather API</h2>
      <Checkboxes cities={cities} checkboxChange={checkboxChange} />
      <button onClick={onFetchData} className="btn btn-info mt-3 px-5">
        OK
      </button>
      <div className="my-3 row justify-content-start">
        {fetchData &&
          fetchData.map((data, i) => {
            return <Box key={i} data={data} />;
          })}
      </div>
    </div>
  );
};

export default App;
