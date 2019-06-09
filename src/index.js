import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  );
  return (
    <Fragment>
      <h1>Test</h1>
      <SeasonDisplay />
    </Fragment>
  );
};

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
