import React from "react";
import { img300 } from "../config";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import TvIcon from "@mui/icons-material/Tv";

import "./SingleMedia.css";

const SingleMedia = ({ id, title, media_type, poster, release, rating }) => {
  return (
    <div className="container">
      <img className="poster" src={`${img300}/${poster}`} alt={title} />
      <span className="title">
        <b>{title}</b>
        <span>{` (${String(release).slice(0, 4)})` || " (####)"}</span>
      </span>
      <span className="subtitle">
        <span className="icon">
          {media_type === "movie" ? <MovieCreationIcon /> : <TvIcon />}
        </span>
        <span>{`Rating: ${Number(rating).toFixed(2)}`}</span>
      </span>
    </div>
  );
};

export default SingleMedia;
