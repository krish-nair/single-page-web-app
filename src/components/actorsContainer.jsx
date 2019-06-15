import React from "react";
import { ActorsList } from "../data/bestActors";
import ActorProfile from "./actorProfile";
import { Route } from "react-router-dom";
import Actors from "./actors";

const ActorsContainer = props => {
  let actorUrl = ActorsList.map(actor => {
    return (
      <Route
        path={`/actors/${actor.url}`}
        render={() => (
          <ActorProfile
            image={actor.profile_img}
            name={actor.name}
            detail={actor.description}
          />
        )}
      />
    );
  });
  return (
    <div>
      <Route
        exact
        path="/actors"
        render={() => <Actors title="Best Actors" />}
      />
      {actorUrl}
    </div>
  );
};

export default ActorsContainer;
