import React, { useEffect, useState } from "react";
import "./App.css";
import { APPaPI, APIURL } from "./rowprt";
import Areas from "./subComponents/areas";
import Mainprt from "./subComponents/mainprt";

const App = () => {
  const [inpdata, setinpdata] = useState([]);
  const [area, setarea] = useState('pune');
  const [apidata, setapidata] = useState([]);

  const getinputd = (e) => {
    setinpdata(e.target.value);
  };

  const searchArea = (e) => {
    e.preventDefault();
    setarea(inpdata);
  };
  console.log("Apiurl", APIURL + "Apikey"+ APPaPI)
  useEffect(() => {
    const fetchapi = async () => {
      const Apidata = await fetch(
        `${APIURL}/data/2.5/weather?q=${area}&appid=${APPaPI}`
      );
      const fetchedD = await Apidata.json();
      setapidata(fetchedD);
    };
    fetchapi();
  }, [area]);
  return (
    <>
      <div className="maindiv">
        <div className="mainbox">
          <form onSubmit={searchArea}>
            <input
              className="search-box"
              placeholder="Enter City"
              onChange={getinputd}
              type="text"
            ></input>
            <button className="search-btn" type="submit">
              Search
            </button>
          </form>
        </div>
        {!apidata.sys ? (
          <div className="errorbox">
            <div className="econtent">
              <h1>
                {" "}
                &#128577; Oh no ! City Was Not found , Please Search Another
                City Name{" "}
              </h1>
            </div>
          </div>
        ) : (
          <div>
            <Areas Cityname={apidata.name} CountryName={apidata.sys.country} />
            <Mainprt
              temprature={apidata.main.temp}
              desc={apidata.weather[0].description}
              humid={apidata.main.humidity}
              wind={apidata.wind.speed}
              sunrise={apidata.sys.sunrise}
              sunset={apidata.sys.sunset}
              clouds={apidata.clouds.all}
              rain={apidata.main.temp_max}
            />
          </div>
        )}
      </div>
    </>
  );
};
export default App;
