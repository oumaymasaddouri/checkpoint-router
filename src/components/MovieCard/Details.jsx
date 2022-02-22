import React from "react";
import "./Details.css";
import { moviesData } from "../../constants/Data";

const Details = ({ match }) => {
  const findMovie = moviesData.find((el) => el.id == +match.params.id);
  return (
    <div className="details">
      <div className="containerD">
        <div className="cardD">
          <div className="card__headerD">
            <img
              src={findMovie.image}
              alt="card__image"
              className="card__imageD"
              width={600}
            />
          </div>
          <div className="card__bodyD">
            <span className="tagD tag-blueD">{findMovie.type}</span>
            <h4>{findMovie.name}</h4>
            <p>{findMovie.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
