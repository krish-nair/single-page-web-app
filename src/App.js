import React, { Component } from "react";
import "./css/style.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar title="Oscars 2019" />
          <Route to="/" render={() => <Home title="Oscar Winners" />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
