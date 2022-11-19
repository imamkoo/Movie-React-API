import axios from "axios";
require("dotenv").config();

const baseURL = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;

export const getMovieList = async () => {
  const Movie = await axios.get(
    `${baseURL}/movie/top_rated?page=1&api_key=${apiKey}`
  );
  return Movie.data.results;
  //   console.log({ Movie });
};

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseURL}/search/movie?query=${q}&page=1&api_key=${apiKey}`
  );
  return search.data;
};
