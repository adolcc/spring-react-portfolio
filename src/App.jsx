import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="pt-16 md:pt-0">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </main>
    </div>
  );
}

export default App;
