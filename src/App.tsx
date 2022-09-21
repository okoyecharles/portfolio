import React, { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import SocialBar from "./components/SocialBar";

const navHeight = document.querySelector(".header")?.getBoundingClientRect();

const App: React.FC = () => {
  const [mediaWidth, setMediaWidth] = useState<number>(1000);
  useEffect(() => {
    setMediaWidth(window.innerWidth);
  }, []);
  window.addEventListener("resize", (e: Event) => {
    const window = e?.target as Window;
    setMediaWidth(window.innerWidth);
  });

  useEffect(() => {
    const navHeight = document
      .querySelector(".header")
      ?.getBoundingClientRect();
    document.documentElement.style.setProperty(
      "--scroll-padding",
      navHeight?.height + "px"
    );
    document.body.style.setProperty(
      "--scroll-padding",
      navHeight?.height + "px"
    );
  }, []);
  return (
    <main className="App">
      <Header mediaWidth={mediaWidth} />
      {mediaWidth > 700 && <SocialBar />}
      <Home mediaWidth={mediaWidth} />
      <Projects mediaWidth={mediaWidth} />
      <About />
      <Contact testmode={false} />
    </main>
  );
};

export default App;
