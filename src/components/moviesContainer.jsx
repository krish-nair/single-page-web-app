import React from "react";
import { Route } from "react-router-dom";
import { MoviesList } from "../data/bestMovies";
import Movies from "./movies";
import MovieProfile from "./movieProfile";

const MoviesContainer = props => {
  let movieUrl = MoviesList.map(movie => {
    return (
      <Route
        path={`/movies/${movie.url}`}
        render={() => (
          <MovieProfile
            image={movie.movie_profile}
            name={movie.name}
            detail={movie.description}
          />
        )}
      />
    );
  });
  return (
    <div>
      <Route
        exact
        path="/movies"
        render={() => <Movies title="Best Movies" />}
      />
      {movieUrl}
    </div>
  );
};

export default MoviesContainer;
