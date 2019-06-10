import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./components/SeasonalDisplay";
import Spinner from "./components/Spinner";

class App extends Component {
  state = {
    latitude: null,
    errorMessage: ""
  };

  componentDidMount() {
    console.log("Component Did Mount");
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("My component re-rendered");
  }
  render() {
    const { errorMessage, latitude } = this.state;
    console.log("Render");
    if (errorMessage && !latitude) {
      return (
        <div className="ui container">
          <h1>Error Message: {errorMessage}</h1>
        </div>
      );
    }

    if (!errorMessage && latitude) {
      return (
        <div>
          <SeasonDisplay lat={latitude} />
        </div>
      );
    }

    return <Spinner message="Please accept location request" />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
