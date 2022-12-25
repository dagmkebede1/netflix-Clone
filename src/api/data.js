import requests from "./requests";

const cardData = [
  {
    title: "NETFLIX ORIGINALS",
    isLargeRow: true,
    fetchUrl: requests.fetchNetflixOriginals,
  },
  {
    title: "Top Rated",
    fetchUrl: requests.fetchTopRatedMovies,
  },
  {
    title: "Action Movies",
    fetchUrl: requests.fetchActionMovies,
  },
  {
    title: "Comedy Movies",
    fetchUrl: requests.fetchComedyMovies,
  },
  {
    title: "Horror Movies",
    fetchUrl: requests.fetchHorrorMovies,
  },
  {
    title: "Romance Movies",
    fetchUrl: requests.fetchRomanceMovies,
  },
  {
    title: "Documentaries",
    fetchUrl: requests.fetchDocumentaries,
  },
];

export default cardData;
