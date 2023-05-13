import React, { useState, useEffect } from "react";
import CustomPagination from "../components/Pagination/CustomPagination";
import SingleMedia from "../components/SingleMedia";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const Search = () => {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState();

  const searchHandler = () => {
    if (value.includes(" ")) {
      value.replace(" ", "%20");
    }
    setQuery(value);
    setValue("");
  };

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=e4747064117be616647a02d90608186a&language=en-US&query=${query}&page=${page}`
    );

    setContent(data.results);
    setNumPages(data.total_pages);
    console.log(data.results);
    console.log(data);
  };

  useEffect(() => {
    fetchSearch();
  }, [page, query]);
  return (
    <div>
      <h1 className="pageTitle">Looking for something</h1>

      <div className="search-bar">
        <SearchIcon className="searchicon" />
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className="search"
          placeholder="Type the name of the Movie, TV Series or Person"
        />
        <button className="btn-search" onClick={searchHandler}>
          Search
        </button>
      </div>

      {query && (
        <>
          <div className="media_container">
            {content &&
              content.map((item) => {
                return (
                  <SingleMedia
                    key={item.id}
                    id={item.id}
                    media_type={item.media_type}
                    title={item.title || item.name}
                    poster={item.poster_path}
                    release={item.release_date || item.first_air_date}
                    rating={item.vote_average}
                  />
                );
              })}
          </div>
          <CustomPagination setPage={setPage} numOfPages={numPages} />
        </>
      )}
    </div>
  );
};

export default Search;
