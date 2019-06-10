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

  return (
    <div>
      {season === "winter" ? (
        <h2>Burr, it is chilly</h2>
      ) : (
        <h2>Let's hit the beach</h2>
      )}
    </div>
  );
};

export default SeasonDisplay;
