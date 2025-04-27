import React from "react";
import { useState } from "react";

const AddAnimal = () => {
  const [tierart, setTierart] = useState("");
  const [name, setName] = useState("");
  const [krankheit, setKrankheit] = useState("");
  const [geburtstag, setGeburtstag] = useState("");
  const [gewicht, setGewicht] = useState("");
  const handleClick = async () => {
    const newTier = {
      tierart,
      name,
      krankheit,
      geburtstag,
      gewicht,
    };

    try {
      const response = await fetch("http://localhost:5005/tiere", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTier),
      });

      const result = await response.text();
      console.log("Serverantwort:", result);
    } catch (err) {
      console.error("Fetch failed:", err);
    }
    alert("Button clicked!");
  };

  return (
    <>
      <input
        type="text"
        value={tierart}
        onChange={(e) => setTierart(e.target.value)}
        placeholder="Tierart"
      />
      <br />
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <br />
      <br />
      <input
        type="text"
        value={krankheit}
        onChange={(e) => setKrankheit(e.target.value)}
        placeholder="Krankheit"
      />
      <br />
      <br />
      <input
        type="text"
        value={geburtstag}
        onChange={(e) => setGeburtstag(e.target.value)}
        placeholder="Geburtstag"
      />
      <br />
      <br />
      <input
        type="text"
        value={gewicht}
        onChange={(e) => setGewicht(e.target.value)}
        placeholder="Gewicht"
      />
      <br />
      <br />
      <button onClick={handleClick}>Tiere hinzufügen</button>
    </>
  );
};

export default AddAnimal;
