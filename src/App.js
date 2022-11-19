import "./App.css";
import { getMovieList, searchMovie } from "./api";
import { useEffect, useState } from "react";

const imgURL = process.env.REACT_APP_BASEIMGURL;

function App() {
  const [TopRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setTopRatedMovies(result);
    });
  }, []);

  const TopRatedMovieList = () => {
    return TopRatedMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img
            className="Movie-image"
            alt=""
            src={`${imgURL}/${movie.poster_path}`}
            width="300px"
          />
          <div className="Movie-date">Release : {movie.release_date}</div>
          <div className="Movie-rate">⭐ {movie.vote_average}</div>
        </div>
      );
    });
  };

  const Search = async (q) => {
    if (q.length >= 3) {
      const query = await searchMovie(q);
      setTopRatedMovies(query.results);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie App</h1>
        <input
          className="Movie-search"
          placeholder="Search..."
          onChange={({ target }) => Search(target.value)}
        />
        <div className="Movie-container">
          <TopRatedMovieList />
        </div>
      </header>
    </div>
  );
}

export default App;
