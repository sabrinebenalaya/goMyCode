import React from "react";
import { useParams } from "react-router-dom";
import "../res/Data";
import SearchBar from "./SearchBar";
function DetailMovie({ movieList }) {
  let { movieId } = useParams();

  console.log(movieId);
  const movie = movieList.find((element) => {
    return element.id === movieId;
  });
  console.log(movie);
  return (
    <>
      <SearchBar />

      <div>
        <div className="detailMovie">
          <div className="leftDiv">
            <div>
              <h1>{movie.title}</h1>
              <p>{movie.decription}</p>
            </div>
            <div>
              <img variant="top" src={movie.poster} alt="The poster of the movie"/>
            </div>
          </div>
          <div className="rightDiv">
            <iframe
              width="100%"
              height="100%"
              src={movie.bdAnonce}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailMovie;
