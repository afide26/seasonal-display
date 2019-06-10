import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const text =
    season === "winter" ? `Burr!!! It's chilly` : `Let's hit the beach!`;
  const icon =
    season === "winter" ? `icon snowflake massive` : `icon sun massive`;
  return (
    <div>
      <i className={icon} />
      <h1>{text}</h1>
      <i className={icon} />
    </div>
  );
};

export default SeasonDisplay;
