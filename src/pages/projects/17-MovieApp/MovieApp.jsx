import { useEffect, useState } from "react";
import Backbutton from "../../../components/layout/backbutton/Backbutton";
import MovieCard from "../../../components/layout/movieCard/MovieCard";
import "./MovieApp.css";

function MovieApp() {
  document.title = "Movie App";
  const [movieArray, setMovieArray] = useState([]);
  useEffect(() => {
    const API_URL =
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5365ea7018ab8a751c09121b15d4388c&page=1";
    const SEARCH_URL =
      'https://api.themoviedb.org/3/search/movie?api_key=5365ea7018ab8a751c09121b15d4388c&query=""';

    async function getMovies(url) {
      const res = await fetch(url);
      const data = await res.json();
      setMovieArray(data.results);
    }

    getMovies(API_URL);

    const form = document.getElementById("movie-form");
    const search = document.getElementById("search");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const searchTerm = search.value;

      if (searchTerm && searchTerm !== "") {
        getMovies(SEARCH_URL + searchTerm);
      } else {
        window.location.reload();
      }
    });
  }, []);

  return (
    <main className="movie-app">
      <div className="movie-header">
        <Backbutton />
        <form action="" id="movie-form">
          <input
            type="text"
            id="search"
            className="movie-search"
            placeholder="Search"
          />
        </form>
      </div>
      <div id="movie-main">
        {movieArray.map((movie) => {
          const IMG_PATH = "https://image.tmdb.org/t/p/w500";

          return (
            <MovieCard
              key={movie.id}
              title={movie.title}
              vote={movie.vote_average}
              release={movie.release_date}
              overview={movie.overview}
              img={`${IMG_PATH + movie.poster_path}`}
            />
          );
        })}
      </div>
    </main>
  );
}

export default MovieApp;
