import React from "react";
import { useState, useEffect } from "react";
import MovieFirst from "../components/MovieFirst";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movies.map((movie) => (
          <MovieFirst
            key={movie.id}
            id={movie.id}
            mediumCoverImage={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
            year={movie.year}
          />
        ))
      )}
    </>
  );
}
