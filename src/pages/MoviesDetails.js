
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../apis/config";
import "./MoviesDetails.css";
import { BsStarFill, BsStar } from "react-icons/bs";

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    axiosInstance
      .get(`/${params.id}?api_key=${process.env.REACT_APP_FIREBASE_API_KEY}`)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => navigate("/"));
  }, [params.id, navigate]);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div className="card bg-dark text-white">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
        className="card-img"
        alt="Backdrop"
      />
      <div className="card-img-overlay caaard">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt="Movie Poster"
        />
      </div>
      <div className="cardbody">
        <h5 className="card-title">{movieDetails.title}</h5>
        <p>Date: <span>{movieDetails.release_date}</span></p>
        <p>Vote Average: <span>{movieDetails.vote_average}</span></p>
        <p>Vote Count: <span>{movieDetails.vote_count}</span></p>
        <p>Original Language: <span>{movieDetails.original_language}</span></p>
        <p>Overview: <span>{movieDetails.overview}</span></p>
        <p>
          Popularity: <span>{movieDetails.popularity}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span id="sp">Revenue:</span> <span >{movieDetails.revenue} $ </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span id="sp">Runtime:</span> <span > {movieDetails.runtime}</span>
        </p>
        <div className="but">
          <span className="btno">Action</span>
          <span className="btno">Crime</span>
          <span className="btno">Thriller</span>
        </div>

          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className="star"
                onClick={() => handleStarClick(star)}
              >
                {star <= rating ? <BsStarFill /> : <BsStar />}
              </span>
            ))}
          </div>
    
      </div>
    </div>
  );
}
