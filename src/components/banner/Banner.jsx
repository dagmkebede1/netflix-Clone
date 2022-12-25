import "../banner/Banner.css";
import Loader from "../loader/Loader";
import useFetch from "../../customHooks/useFetch";
import requests from "../../api/requests";

const Banner = () => {
  const { data, isLoading } = useFetch(requests.fetchNetflixOriginals);
  const movie = data[Math.floor(Math.random() * data.length)];

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <header
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition: "center",
          }}
        >
          <div className="banner__contents">
            <h1 className="banner__title">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner__buttons">
              <button className="banner__button">Play</button>
              <button className="banner__button">My List</button>
            </div>
            <h1 className="banner__description">
              {truncate(movie?.overview, 150)}
            </h1>
          </div>
          <div className="banner__fadeBottom" />
        </header>
      )}
    </>
  );
};

export default Banner;
