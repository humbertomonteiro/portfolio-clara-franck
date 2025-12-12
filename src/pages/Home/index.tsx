import About from "../../components/About";
import Contact from "../../components/Contact";
import EventsGallery from "../../components/EventsGallery";
import Hero from "../../components/Hero";
import Footer from "../../components/templates/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <EventsGallery />
      <Contact />
      <Footer />
    </>
  );
}
