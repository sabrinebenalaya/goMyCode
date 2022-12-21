import React from "react";
import { Link } from "react-router-dom";
import Film from "./Film";
import Data from "../res/Data";

function ListOfMovis({ movieList, text, rate, currentItems }) {
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
