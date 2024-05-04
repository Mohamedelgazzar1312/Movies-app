import React, { useState } from "react";
import axios from "axios";
import "./movie.css"
function SearchContainer({ onSearch,searchResult }) {
  const [searchName, setSearchName] = useState("");

  const handleSearch = () => {
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: process.env.REACT_APP_FIREBASE_API_KEY,
          query: searchName,
        },
      })
      .then((res) => {
        onSearch(res.data.results);

        
      })
      .catch((err) => console.log(err));
      setSearchName("");
  };


  return (
    <div className="search-container">
      <input
        type="text"
        onChange={(e) => setSearchName(e.target.value)}
        placeholder="Search"
      />
        <svg onClick={handleSearch} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FDD1FF" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
    </div>
  );
}

export default SearchContainer;