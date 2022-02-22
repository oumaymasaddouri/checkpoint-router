import Rating from "@mui/material/Rating";
import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie, deleteMovie }) => {
  return (
    <div className="card">
      <figure className="movie">
        <div className="movie__hero">
          <img
            src={movie.image}
            alt={movie.name}
            className="movie__img"
            height={300}
          />
        </div>
        <div className="movie__content">
          <div className="movie__title">
            <h1 className="heading__primary">{movie.name} </h1>
            <div className="movie__tag movie__tag--1">
              <Rating name="read-only" value={movie.rating} readOnly />
            </div>
          </div>
          <p className="movie__description">{movie.description}</p>
          <div className="movie__details">
            <p className="movie__detail">
              <span className="icons icons-red"></span>
              Date: {movie.date}
            </p>
            <button onClick={() => deleteMovie(movie.id)}>Delete</button>
            <Link to={`/Details/${movie.id}`}>
              <button>Details</button>
            </Link>
          </div>
        </div>
        <div className="movie__price">{movie.type}</div>
      </figure>
    </div>
  );
};

export default MovieCard;
