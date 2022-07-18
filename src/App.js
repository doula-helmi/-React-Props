import Profile from "./Profile/Profile";
import image from "./helmi.png";

function App() {
  return (
    <Profile
      fullName="Doula Helmi"
      Bio="La vie ne se mesure pas par le nombre de respirations, mais par les moments qui nous coupent le souffle."
      Profession="Fullstack JS"
    >
      {image}
    </Profile>
  );
}

export default App;
