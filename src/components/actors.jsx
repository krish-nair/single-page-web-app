import React from "react";
import { ActorsList } from "../data/bestActors";
import { Link } from "react-router-dom";

const Actors = props => {
  let actors = ActorsList.map(person => {
    return (
      <div className="actor-container">
        <Link to={`/actors/${person.url}`}>
          <div
            className="actor-image"
            style={{ backgroundImage: "url(" + person.img_src + ")" }}
          />
        </Link>
        <h3>{person.name}</h3>
      </div>
    );
  });
  return (
    <div className="main-content">
      <div>
        <Link className="back-btn" to="/">
          Back
        </Link>
      </div>
      <h2>{props.title}</h2>
      <div className="container">{actors}</div>
    </div>
  );
};

export default Actors;
