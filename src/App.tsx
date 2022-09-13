import React from "react";
import { Routes } from "react-router-dom";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
      </Routes>
    </div>
  );
};

export default App;
