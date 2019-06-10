import React, { Component } from "react";
import ReactDOM from "react-dom";
// import SeasonDisplay from "./SeasonDisplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      errorMessage: ""
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  render() {
    const { errorMessage, latitude } = this.state;
    if (errorMessage && !latitude) {
      return (
        <div className="ui container">
          <h1>Error Message: {errorMessage}</h1>
        </div>
      );
    }

    if (!errorMessage && latitude) {
      return (
        <div className="ui container">
          <h1>Error Message: {latitude}</h1>
        </div>
      );
    }

    return (
      <div>
        <h2>Loading....</h2>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
