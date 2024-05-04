import {React,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites  } from '../store/counter';
import MovieCardForFAV from "../components/movies/moviecardforFav";

export default function WatchList() {
  const favorites = useSelector(state => state.counter.favorites);
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(true);

  const handleDelete = (movieId) => {
    dispatch(removeFromFavorites(movieId));
    setIsFavorite(!isFavorite)
  };

  return (
    <>
    <div className="row row-cols-1 row-cols-md-3 g-4 bg-dark" style={{ padding: "50px" }}>
        {favorites.map((movie, index) => (
          <div className="col" key={index}>
            <MovieCardForFAV movieItem={movie} index={index} />
 
          </div>
        ))}
      </div>
        
    </>

  )
}
