import React from "react";
import "../App.css";

const Areas = ({ Cityname, CountryName }) => {
  var D = new Date();

  var date = D.getFullYear() + "-" + (D.getMonth() + 1) + "-" + D.getDate();
  return (
    <div className="Areai">
      <h2>
        {Cityname} {CountryName}
      </h2>
      <p>{date}</p>
    </div>
  );
};

export default Areas;
