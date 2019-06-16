import React, { Component } from "react";
import "./css/style.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Actors from "./components/actors";
import Actress from "./components/actress";
import ActorsContainer from "./components/actorsContainer";
import ActressContainer from "./components/actressContainer";
import MoviesContainer from "./components/moviesContainer";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar title="Oscars 2019" />
          <Route exact path="/" render={() => <Home title="Oscar Winners" />} />
          <Route
            path="/actors"
            render={() => <ActorsContainer title="Best Actors" />}
          />
          <Route
            path="/actress"
            render={() => <ActressContainer title="Best Actress" />}
          />
          <Route
            path="/movies"
            render={() => <MoviesContainer title="Best Movies" />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
