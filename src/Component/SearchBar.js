import React, { useState } from "react";
import "../res/App.css";
import ReactStars from "react-rating-stars-component";
import AddMovie from './AddMovie';

function SearchBar({  text, setRate, addHandelMovie }) {

  const ratingChanged = (newRating) => {
    setRate(newRating)
  };

  const handelChange = (event) => {
    text(event.target.value);
  };
  return (
    <div className="navBar">
      <div className="search">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={handelChange}
        />
      </div>
      <div className="starsRate">
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
          edit={true}
        />
      </div>
      <div> <AddMovie addHandelMovie={addHandelMovie}/></div>
    </div>
  );
}

export default SearchBar;
