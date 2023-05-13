import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleMedia from "../components/SingleMedia";
import CustomPagination from "../components/Pagination/CustomPagination";
import Genre from "../components/Genre";
import "./Movies.css";
import useGenres from "../hooks/useGenres";

const Series = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState();

  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const genreURL = useGenres(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=e4747064117be616647a02d90608186a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreURL}`
    );

    setContent(data.results);
    setNumPages(data.total_pages);
    console.log(data.results);
    console.log(data);
  };

  useEffect(() => {
    fetchMovies();
  }, [page, genreURL]);

  return (
    <div>
      <h1 className="pageTitle">TV Series</h1>
      <Genre
        type="tv"
        genres={genres}
        selectedGenres={selectedGenres}
        setGenres={setGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
        page={[page]}
      />
      <div className="media_container">
        {content &&
          content.map((item) => {
            return (
              <SingleMedia
                key={item.id}
                id={item.id}
                media_type="tv"
                title={item.title || item.name}
                poster={item.poster_path}
                release={item.release_date || item.first_air_date}
                rating={item.vote_average}
              />
            );
          })}
      </div>
      <CustomPagination setPage={setPage} numOfPages={numPages} />
    </div>
  );
};

export default Series;
