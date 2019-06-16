import React from "react";
import { ActressList } from "../data/bestActresses";
import { Link } from "react-router-dom";

const Actress = props => {
  let actress = ActressList.map(person => {
    return (
      <div className="actress-container">
        <Link to={`/actress/${person.url}`}>
          <div
            className="actress-image"
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
      <div className="container">{actress}</div>
    </div>
  );
};

export default Actress;
