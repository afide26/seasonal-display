import React from "react";

const SeasonDisplay = ({ lat }) => {
  const style = { background: "orangered" };
  return (
    <div style={lat <= 0 ? style : null}>
      <h2>Season Display Component</h2>
      <p>Your location:{lat}</p>
    </div>
  );
};

export default SeasonDisplay;
