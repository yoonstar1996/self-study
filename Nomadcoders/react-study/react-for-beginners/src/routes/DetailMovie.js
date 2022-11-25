import React from "react";

export default function DetailMovie({
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
          {title} ({year})
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
