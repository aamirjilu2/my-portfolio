import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Internships from "./components/Internships";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import FloatingAIChat from "./components/FloatingAIChat";

function App() {
  return (
    <ThemeProvider>
      <div style={{ minHeight:"100vh", background:"var(--bg)", color:"var(--text)" }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internships />
        <Experience />
        <Certificates />
        <Contact />
        <Footer />
        <WhatsAppFloat />
        <FloatingAIChat />
      </div>
    </ThemeProvider>
  );
}
export default App;
