import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AnimalCard from "./components/AnimalCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddAnimal from "./components/AddAnimal";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App></App>}></Route>
        <Route
          path="/animalcard/:id"
          element={<AnimalCard></AnimalCard>}
        ></Route>
        <Route path="/addanimal" element={<AddAnimal></AddAnimal>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// <Route path="./animallist" element={<AnimalList></AnimalList>}></Route>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
