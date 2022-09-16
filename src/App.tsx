import React, { useEffect, useState } from "react";
import { Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
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
    <main className="App">
      <Header mediaWidth={mediaWidth} />
      {mediaWidth > 700 && (<SocialBar />)}
      <Home mediaWidth={mediaWidth} />
      <Projects mediaWidth={mediaWidth} />
    </main>
  );
};

export default App;
