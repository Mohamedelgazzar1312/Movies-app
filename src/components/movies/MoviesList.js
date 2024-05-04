import React, { useEffect, useState, useContext } from "react";
import axiosInstance from "../../apis/config";
import MovieCard from "./MovieCard";
import "./movie.css";
import "./pagination.css";
import { LanguageContext } from "../../context/language";
import SearchContainer from "./search";

function MovieList() {
  const [moviesArr, setMoviesArr] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [displayedPages, setDisplayedPages] = useState([]);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage, language]);

  useEffect(() => {
    generateDisplayedPages();
  }, [totalPages]);

  const fetchMovies = (page) => {
    axiosInstance
      .get("/popular", {
        params: {
          api_key: process.env.REACT_APP_FIREBASE_API_KEY,
          language: language,
          page: page,
        },
      })
      .then((res) => {
        setMoviesArr(res.data.results);
        setTotalPages(res.data.total_pages);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleSearch = (results) => {
    setSearchResult(results);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const generateDisplayedPages = () => {
    const pages = [];
    const maxDisplayedPages = 4;
    const startPage = Math.max(1, currentPage - Math.floor(maxDisplayedPages / 2));
    const endPage = Math.min(totalPages, startPage + maxDisplayedPages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    setDisplayedPages(pages);
  };

  const moviesToDisplay = searchResult.length > 0 ? searchResult : moviesArr;
  console.log(moviesToDisplay);

  return (
    <>
      <SearchContainer onSearch={handleSearch} searchResult={searchResult} />

      <div className="row row-cols-1 row-cols-md-3 g-4 " style={{background:"#1E001F", padding: "50px" }}>
        {moviesToDisplay.map((movie, index) => (
          <div className="col" key={index}>
            <MovieCard movieItem={movie} index={index} />
          </div>
        ))}

<ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          {displayedPages.map((page) => (
            <li className={`page-item ${currentPage === page ? "active" : ""}`} key={page}>
              <button className="page-link" onClick={() => handlePageChange(page)}>
                {page}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>


      </div>

      
       
   
    </>
  );
}

export default MovieList;