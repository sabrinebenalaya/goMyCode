import "../res/App.css";
import ReactStars from "react-rating-stars-component";
import AddMovie from "./AddMovie";
import { Link } from "react-router-dom";

function SearchBar({ setText, setRate, addHandelMovie }) {
  const ratingChanged = (newRating) => {
    setRate(newRating);
    console.log(newRating);
  };
  const handelChange = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="abc">
      <div className="navBar">
        <div>
          <Link to={"/"}>
            <img
              src="https://www.freeiconspng.com/thumbs/movie-icon/movie-icon-6.png"
              alt="Movie-App"
              width={70}
            ></img>
          </Link>
        </div>
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
        <div>
          <AddMovie addHandelMovie={addHandelMovie} />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
