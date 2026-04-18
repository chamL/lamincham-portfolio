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
        <div className="bg-bg text-text min-h-screen 
        bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.06),transparent_40%)]
        ">
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
