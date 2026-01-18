import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Internships from "./components/Internships";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="
      min-h-screen
      bg-lightbg text-slate-900
      dark:bg-darkbg dark:text-gray-200
      transition-colors duration-300
    ">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Internships />
      <Certificates />
      <Contact />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
