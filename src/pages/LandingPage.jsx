import AboutSection from "../componenets/AboutSection";
import HeroSection from "../componenets/HeroSection";
import Footer from "../componenets/Footer";
import KPIs from "../componenets/KPIs";
import Services from "../componenets/Services";
import Contact from "../componenets/Contact";
import Gallery from "../componenets/Gallery";


import { useEffect } from "react";
import { useLocation } from "react-router";

export default function LandingPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const section = document.querySelector(hash);

      section?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [hash]);

  return (
    <div>
      <div id="home">
        <HeroSection />
      </div>

      <div id="about">
        <AboutSection />
      </div>

      <div id="events">
        <Services />
      </div>

      <div id="contact">
        <Contact />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}



