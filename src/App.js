import {useEffect, useState} from "react";
import './App.css';
import StarShipCard from "./components/StarShipCard";
import NavBar from "./components/NavBar";

function App() {
  const [ships, setShips] = useState([]); 
  useEffect(() => {
    const fetchData = async() => {
      const res = await fetch("https://swapi.dev/api/starships/")
      const data = await res.json();
      setShips(data.results);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <NavBar></NavBar>
      <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
      {ships.map((ship, index) => (
        <StarShipCard key={index} ship={ship} />
      ))}
      </div>
    </div>
  );
}

export default App;
