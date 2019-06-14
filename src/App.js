import React, { Component } from "react";
import "./css/style.css";
import Navbar from "./components/navbar";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="app">
        <Navbar />
      </div>
    );
  }
}

export default App;
