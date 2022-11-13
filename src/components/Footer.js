import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/footer.css";
import LearnCard from "./LearnCard";
function Footer() {
  return (
    <>
      <footer className="styleDiv">
     
        <p> This is the footer of my app</p>
        <LearnCard />
      </footer>
    </>
  );
}

export default Footer;
