import AboutSection from "../componenets/AboutSection";
import HeroSection from "../componenets/HeroSection";
import Footer from "../componenets/Footer";
import KPIs from "../componenets/KPIs";
import Services from "../componenets/Services";
import Contact from "../componenets/Contact";
import Gallery from "../componenets/Gallery";
export default function LandingPage() {
  return (
    <div>
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <KPIs />
      <div id="events">
        <Services />
      </div>
      <Gallery/>
      <div id="contact">
        <Contact/>
      </div>
      <Footer />
    </div>
  );
}
