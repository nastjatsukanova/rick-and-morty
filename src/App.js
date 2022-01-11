import React from "react";
import "./App.css";
import { About } from "./components/About/About";
import { MainPage } from "./components/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
