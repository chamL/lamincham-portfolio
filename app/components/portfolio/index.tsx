"use client";
import Header from "./components/sections/header/Header";
import Hero from "./components/sections/hero/Hero";
import Skills from "./components/sections/skills/Skills";
import Projects from "./components/sections/projects/Projects";
import Footer from "./components/sections/footer/Footer";
import Experience from "./components/sections/experience/Experience";
import Exams from "./components/sections/exams/Exams";

function Portfolio() {
  return (
    <div className="bg-black/70">
      <Header title={"Portfolio"} logo="kommer" />
      <Hero />
      <Skills />
      <Exams />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default Portfolio;
