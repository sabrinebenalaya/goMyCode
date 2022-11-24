import React, { Component } from "react";
import Profil from "./Profil";
export default class App extends Component {
  state = {
    Person: {
      fullName: "Mark Elliot Zuckerberg ",
      bio: " He born May 14, 1984 in White Plains, New York, is an American computer scientist, entrepreneur, and billionaire.",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg",
      profession: "CEO of Facebook",
    },
    shows: false,
  };
  onHandelShow = () => {
    (this.state.shows)? this.setState({ shows: false }):this.setState({ shows: true })
  };
  render() {
    return (
      <div>
        <button onClick={this.onHandelShow}>{(this.state.shows)?"Hide Profile":"Show Profil"}</button>
        {this.state.shows && <Profil Persone={this.state.Person} Shows={this.state.shows} />}
      </div>
    );
  }
}
