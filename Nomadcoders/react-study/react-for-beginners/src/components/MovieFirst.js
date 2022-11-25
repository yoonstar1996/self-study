import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function MovieFirst({
  mediumCoverImage,
  title,
  summary,
  genres,
  year,
  id,
}) {
  return (
    <>
      <div>
        <img src={mediumCoverImage} alt={title} />
        <h2>
          <Link to={`/movie/${id}`}>{title} </Link> ({year})
        </h2>
        <p>{summary}</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

MovieFirst.propTypes = {
  id: PropTypes.number.isRequired,
  mediumCoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
};
