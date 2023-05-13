import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleMedia from "../components/SingleMedia";
import CustomPagination from "../components/Pagination/CustomPagination";
import "./Trending.css";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=e4747064117be616647a02d90608186a&page=${page}`
    );
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div>
      <h1 className="pageTitle">Trending</h1>
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
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
