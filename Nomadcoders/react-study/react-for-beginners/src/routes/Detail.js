import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "./DetailMovie";

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(json.data.movie);
    setLoading(false);
    console.log(movie.title);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      {loading ? (
        <h1>Movie Detail Loading...</h1>
      ) : (
        <DetailMovie
          key={movie.id}
          id={movie.id}
          mediumCoverImage={movie.medium_cover_image}
          title={movie.title}
          summary={movie.summary}
          genres={movie.genres}
          year={movie.year}
        />
      )}
    </>
  );
}
