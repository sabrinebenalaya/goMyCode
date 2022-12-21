import React from "react";
import SearchBar from "./SearchBar";
import PaginatedMovis from "./PaginatedMovis";

function Home({
  movieList,
  setText,
  setRate,
  addHandelMovie,
  text, rate
 
}) {
  return (
    <>
      <SearchBar
        setText={setText}
        setRate={setRate}
        addHandelMovie={addHandelMovie}
      />
   
      <PaginatedMovis  itemsPerPage={2} movieList={movieList}  text={text} rate={rate} />
    </>
  );
}

export default Home;
