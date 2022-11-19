import "./App.css";
import { Profil } from "./Profil/Profil";
import imgProfil from "./res/profill.png";

function App() {
  const profil = [
    {
      id: "0",
      fullName: "sabrine",
      bio: "bio de sabrine",
      profession: "developer"
    },
    {
      id: "0",
      fullName: "sabrina",
      bio: "bio de sabrina",
      profession: "developer"
    },
  ];
  const handleName = (x) => {
    alert(x);
  };
  return (
      profil.map((el)=>(
      <Profil key={profil.id} profil={el} handleAlert={handleName}>
        {imgProfil}
      </Profil>
      ) )
    
  );
}

export default App;
