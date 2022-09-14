import React, { useEffect, useState } from "react";
import { Routes } from "react-router-dom";
import Header from "./components/Header";
import SocialBar from "./components/SocialBar";

const App: React.FC = () => {
  const [mediaWidth, setMediaWidth] = useState<number>(0);
  useEffect(() => {
    setMediaWidth(window.innerWidth);
  }, []);
  window.addEventListener("resize", (e: Event) => {
    const window = e?.target as Window;
    setMediaWidth(window.innerWidth);
  });
  return (
    <div className="App">
      <Header mediaWidth={mediaWidth} />
      {mediaWidth > 700 && (<SocialBar />)}
      <Routes></Routes>
    </div>
  );
};

export default App;
