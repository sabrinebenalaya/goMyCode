import React from "react";
import ListOfMovis from "./ListOfMovis";
import SearchBar from "./SearchBar";

function Home({
  movieList,
  setText,
  setRate,
  addHandelMovie,
  text,
  rate,
 
}) {
  return (
    <>
      <SearchBar
        setText={setText}
        setRate={setRate}
        addHandelMovie={addHandelMovie}
      />
      <ListOfMovis
        movieList={movieList}
        text={text}
        rate={rate}
     
      />
    </>
  );
}

export default Home;
