import './App.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function App() {

  const [animalData, setAnimalData] = useState([]); // Initial empty state

  // Function to fetch Animals
  const fetchallAnimals = async () => {

    try {
      const response = await fetch(`http://localhost:5005/tiere`);
      const data = await response.json();
      setAnimalData(data); // Update state with fetched data
      return animalData; // Return the fetched data
    } catch (error) {
      console.error("Error fetching animals:", error);
    }
  };

  // initial render
  useEffect(() => {
    fetchallAnimals(); // Fetch data on component mount
  }, []); // Empty dependency array to run only once

  return (
    <div>
      {animalData.map((animal) => (
        <>
          <br></br>
          <div className="container">
            <h2>Name: {animal.name}</h2>
            <p>Tierart: {animal.tierart}</p>
            <br></br>
            <Link to={`/animalcard/${animal.id}`}>Details</Link>
          </div>
        </>
      ))}
    </div>
  );
}

export default App;
