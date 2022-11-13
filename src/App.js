import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import FormApp from "./components/FormApp";
import UsersCard from "./components/UsersCard";

const myGif =
  "https://reactscript.com/wp-content/uploads/2016/06/React-Components-For-The-Web-Animations-API.gif";
function App() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "space-between", marginTop:"100px", marginBottom:"100px" }}>
        <img src={myGif} alt="my-gif" />
        <FormApp />
      </div>
      <UsersCard />
      <Footer />
    </div>
  );
}

export default App;
