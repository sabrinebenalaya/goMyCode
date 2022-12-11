import React, { useState } from "react";
import Data from "./res/Data";
import "./res/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./Component/SearchBar";
import ListOfMovis from "./Component/ListOfMovis";

function App() {
  const [movieList, SetMovieList] = useState(Data);

const [text, setText]= useState('')
const [rate, setRate]=useState(0)
const addHandelMovie =(movie)=>{
SetMovieList([...movieList, movie])

}
  return (
    <>
      <SearchBar text={setText} setRate={setRate} addHandelMovie={addHandelMovie}/>
      <ListOfMovis movieList={movieList} text={text} rate={rate}/>
    </>
  );
}

export default App;
