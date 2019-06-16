import React from "react";
import { MoviesList } from "../data/bestMovies";
import { Link } from "react-router-dom";

const Movies = props => {
  let movies = MoviesList.map(movie => {
    return (
      <div className="movie-container">
        <Link to={`/movies/${movie.url}`}>
          <div
            className="movie-image"
            style={{ backgroundImage: "url(" + movie.img_src + ")" }}
          />
        </Link>
        <h3>{movie.name}</h3>
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

      <div className="container">{movies}</div>
    </div>
  );
};

export default Movies;
