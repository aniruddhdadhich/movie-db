import React, { useEffect } from "react";
import Chip from "@mui/material/Chip";
import axios from "axios";

const Genre = ({
  type,
  genres,
  selectedGenres,
  setGenres,
  setSelectedGenres,
  setPage,
  page,
}) => {
  const handleClick = (genre) => {
    {
      !selectedGenres.includes(genre)
        ? setSelectedGenres([...selectedGenres, genre])
        : setSelectedGenres([...selectedGenres]);
    }

    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleDelete = (genre) => {
    setSelectedGenres(selectedGenres.filter((sg) => sg.id !== genre.id));
    {
      !genres.includes(genre)
        ? setGenres([...genres, genre])
        : setGenres([...genres]);
    }
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=e4747064117be616647a02d90608186a&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
  });

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres &&
        selectedGenres.map((sg) => (
          <Chip
            label={sg.name}
            style={{ margin: 2 }}
            color="primary"
            key={sg.id}
            clickable
            onClick={() => handleClick(sg)}
            onDelete={() => handleDelete(sg)}
          />
        ))}
      {genres &&
        genres.map((g) => (
          <Chip
            label={g.name}
            style={{ margin: 2, color: "white", backgroundColor: "#4e208fe8" }}
            key={g.id}
            clickable
            onClick={() => handleClick(g)}
            onDelete={() => handleDelete(g)}
          />
        ))}
    </div>
  );
};

export default Genre;
