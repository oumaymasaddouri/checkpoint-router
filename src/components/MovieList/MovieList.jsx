import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies, text, rate, deleteMovie }) => {
  return (
    <div className="cards">
      {movies
        .filter((film) => film.name.toLowerCase().includes(text.toLowerCase()))
        .filter((film) => film.rating >= rate)
        .map((movie) => (
          <MovieCard movie={movie} key={movie.id} deleteMovie={deleteMovie} />
        ))}
    </div>
  );
};

export default MovieList;
