import React from "react";
import { Link } from "react-router-dom";

const ActorProfile = props => {
  return (
    <div className="main-content">
      <div>
        <Link className="back-btn" to="/actors">
          Back
        </Link>
      </div>
      <div className="container">
        <div
          className="image-profile"
          style={{ backgroundImage: "url(" + props.image + ")" }}
        />
        <h2>{props.name}</h2>
        <p>{props.detail}</p>
      </div>
    </div>
  );
};

export default ActorProfile;
