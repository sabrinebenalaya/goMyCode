import React from "react";
import Film from "./Film";

function ListOfMovis({ movieList, text, rate }) {
  return (
    <div className="container">
      {movieList
        .filter(
          (movie) =>
          movie.title.toUpperCase().includes(text.toUpperCase()) &&
            movie.rate >= rate
        )

        .map((movie) => (
          <Film key={movie.id} movie={movie} />
        ))}
    </div>
  );
}

export default ListOfMovis;
