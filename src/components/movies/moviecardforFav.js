import { useLocation, useNavigate } from "react-router-dom";

import React from "react";
import { useDispatch } from "react-redux";
import { removeFromFavorites } from "../../store/counter";

function MovieCardForFAV({ movieItem }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleFavoriteClick = () => {
    dispatch(removeFromFavorites(movieItem.id)); // Pass the movie ID to the action creator
  };

  const { title, release_date, poster_path } = movieItem;

  return (
    <div className="card" style={{ height: "500px", marginTop: "10px" }}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        className="card-img-top"
        style={{ height: "380px", outlineStyle: "none" }}
      />
      <div className="card-body" style={{ backgroundColor: "#29052A" }}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Release Date: {release_date}</p>

        <svg
          className="heart1"
          onClick={handleFavoriteClick}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="red"
          class="bi bi-heart-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
        </svg>

        <button
          className="btn btn-primary"
          onClick={() => navigate(`/movie-details/${movieItem.id}`)}
        >
          View
        </button>
      </div>
    </div>
  );
}

export default MovieCardForFAV;