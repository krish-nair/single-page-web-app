import React from "react";
import { ActressList } from "../data/bestActresses";
import ActressProfile from "./actressProfile";
import { Route } from "react-router-dom";
import Actress from "./actress";

const ActressContainer = props => {
  let actressUrl = ActressList.map(person => {
    return (
      <Route
        path={`/actress/${person.url}`}
        render={() => (
          <ActressProfile
            image={person.profile_img}
            name={person.name}
            detail={person.description}
          />
        )}
      />
    );
  });
  return (
    <div>
      <Route
        exact
        path="/actress"
        render={() => <Actress title="Best Actresses" />}
      />
      {actressUrl}
    </div>
  );
};

export default ActressContainer;
