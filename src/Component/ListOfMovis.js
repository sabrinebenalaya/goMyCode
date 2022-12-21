import React from "react";
import { Link } from "react-router-dom";
import Film from "./Film";

function ListOfMovis({  currentItems }) {
  return (
    <>
      <div className="container">
        {currentItems.map((movie) => (
          <Link to={`/movie/${movie.id}`}>
            <Film key={movie.id} movie={movie} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default ListOfMovis;
