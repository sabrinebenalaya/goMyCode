import "./App.css";
import Navbar from "./components/Navbar";
import infoIcon from "./res/InformationIcon.png";
import SearchDiv from "./components/SearchDiv";
import Units from "./components/Units";
function App() {
  return (
    <div className="grayDiv">
      <div className="whiteDiv">
        <Navbar />
        <div className="bleuDiv">
          <div className="iconDiv">
            <img src={infoIcon} alt="information"></img>
            <h5 style={{ color: "white" }}>Unit Converter</h5>
          </div>
          <div className="containerDiv">
            <div className="containerUnit">
              <SearchDiv />
              <Units />
            </div>
            <div className="containerUnit">
              <SearchDiv />
              <Units />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
