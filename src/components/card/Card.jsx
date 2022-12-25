import React from "react";
import { useState } from "react";
import "./Card.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import useFetch from "../../customHooks/useFetch";
const base_url = "https://image.tmdb.org/t/p/original";

const Card = ({ title, fetchUrl, isLargeRow }) => {
  const [trailerUrl, setTrailerUrl] = useState("");

  const { data } = useFetch(fetchUrl);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          setTrailerUrl(urlParams.get("v"));
        }
      );
    }
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {data.map((movie) => (
          <img
            key={movie.name}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Card;
