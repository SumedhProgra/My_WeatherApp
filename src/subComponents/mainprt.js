import React from "react";
import "../App.css";

const Mainprt = ({
  temprature,
  desc,
  humid,
  wind,
  sunrise,
  sunset,
  clouds,
  rain,
}) => {
  var m_temp = parseInt(rain - 273.15);
  var deg = parseInt(temprature - 273.15);
  var Sunr = sunrise;
  var Suns = sunset;
  var SunrT = new Date(Sunr * 1000);
  var SunrT2 = new Date(Suns * 1000);

  var time1 = SunrT.toLocaleTimeString();
  var time2 = SunrT2.toLocaleTimeString();
  return (
    <div className="temprature">
      <div className="data">
        <h1 >{deg} &#176; C</h1>
        <p >{desc}</p>
      </div>
      <div className="details">
        <div>
          <h4 className="cd">{humid}%</h4>
          <p className="cd">Humidity</p>
        </div>
        <div>
          <h4 className="cd">{wind} m/s</h4>
          <p className="cd">Wind</p>
        </div>
        <div>
          <h4 className="cd">{time1}</h4>
          <p className="cd">Sunrise</p>
        </div>
        <div>
          <h4 className="cd">{clouds} %</h4>
          <p className="cd">Cloudiness</p>
        </div>
        <div>
          <h4 className="cd">{m_temp} &#176; C</h4>
          <p className="cd">Highest Temp</p>
        </div>
        <div>
          <h4 className="cd">{time2}</h4>
          <p className="cd">Sunset</p>
        </div>
      </div>
    </div>
  );
};

export default Mainprt;
