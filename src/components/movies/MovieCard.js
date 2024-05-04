import { useLocation, useNavigate } from "react-router-dom";
import './movie.css'
import {React,useState} from "react";
import { useDispatch ,useSelector} from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../store/counter"

function MovieCard({ movieItem }) {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  // const favorites = useSelector((state) => state.favorites) ||[];
  // const isMovieInFavorites = favorites.some((fav) => fav.id === movieItem.id);
  const handleFavoriteClick = () => {
    if(!isFavorite){
    dispatch(addToFavorites(movieItem));
    setIsFavorite(!isFavorite);}
    else{
      dispatch(removeFromFavorites(movieItem.id))
      setIsFavorite(!isFavorite);
    }
  };
  // useState(() => {
  //   setIsFavorite(isMovieInFavorites);
  // }, [isMovieInFavorites]);
  
  const { title, release_date, poster_path, } = movieItem;

  return (
    <div className="card"style={{height:"500px" ,marginTop:"10px", backgroundColor:"#4B164C"}}     >
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} className="card-img-top"style={{height:"380px", outlinestyle: "none"}} />
      <div className="card-body"  style={{backgroundColor:"#4B164C" }}  >
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Release Date: {release_date}</p>

        {<svg className="heart1"  onClick={handleFavoriteClick}  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill={`${isFavorite ? "red" : "white"}`} class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg>  }
        <button className="btn " onClick={() => navigate(`/movie-details/${movieItem.id}`)}>View</button>
      
      </div>
    </div>
  );                        
}

export default MovieCard;

