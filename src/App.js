import React, { useState, useEffect } from "react";
import "./res/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home";
import Data from "./res/Data";
import DetailMovie from "./Component/DetailMovie";
import PaginatedItems from "./Component/PaginatedMovis.js";

function App() {
  const [text, setText] = useState("");
  const [rate, setRate] = useState(0);
  const [movieList, SetMovieList] = useState(Data);

  const addHandelMovie = (movie) => {
    SetMovieList([...movieList, movie]);
  };

  const routes = [
    {
      path: "/",
      element: (
        <Home
          movieList={movieList}
          setText={setText}
          setRate={setRate}
          addHandelMovie={addHandelMovie}
        text={text} rate={rate}
        />
      ),
    },
    { path: "/movie/:movieId", element: <DetailMovie movieList={movieList} /> },
   
  ];
  const router = createBrowserRouter(routes);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
