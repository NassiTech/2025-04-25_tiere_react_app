import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./AnimalCard.css"

function AnimalCard() {
  const { id } = useParams();
  const [animalData, setAnimal] = useState();

  useEffect(() => {
    async function getAnimalDetails() {
      const res = await fetch(`http://localhost:5005/tiere/${id}`);
      const data = await res.json();
      setAnimal(data);
    }

    getAnimalDetails();
  }, []);

  if (!animalData) {
    return <p></p>;
  }
  return (
    <>
      <div className="container">
        <h2>Name: {animalData.name}</h2>
        <p>Tierart: {animalData.tierart}</p>
        <p>Krankheit: {animalData.krankheit}</p>
        <p>Geburtstag: {animalData.geburtstag}</p>
        <p>Gewicht: {animalData.gewicht}</p>
        <p>Id: {animalData.id}</p>
        <br></br>
      </div>
    </>
  )
}

export default AnimalCard