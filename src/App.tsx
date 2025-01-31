import { LandingSection } from './sections/LandingSection.tsx';
import { Navbar } from './components/NavBar.tsx';
import { AboutSection } from './sections/AboutSection.tsx';
import { TechStackSection } from './sections/TechStackSection.tsx';
import { ProjectsSection } from './sections/ProjectsSection.tsx';
import { ContactSection } from './sections/ContactSection.tsx';
import { useEffect } from 'react';
import { Background } from './components/Background.tsx';
import Footer from './sections/Footer.tsx';

function App() {

  useEffect(() => {
    if (window.location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // Delay ensures page fully loads before scrolling
      }
    }
  }, [location]); // Runs whenever URL hash changesuseEffect(() => {


    return (
      <>
        <Background />
        <Navbar />
        <LandingSection/>
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </>
    )
}

export default App
