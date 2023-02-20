import React from 'react';

function Movie(props) {
  return (
    <div className="Movie">
      <img src={props.img} alt="movie poster" />
      <div className="movie-details">
        <h3>{props.title}</h3>
        <p>Year: {props.year}</p>
      </div>
    </div>
  );
}

export default Movie;
