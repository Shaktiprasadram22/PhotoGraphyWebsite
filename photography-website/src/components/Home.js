import React from "react";
import "./Home.css";
import HeroSection from "./HeroSection";
import FeaturedPhotos from "./FeaturedPhotos";
import About from "./About";
import Services from "./Services";
import Shop from "./Shop"; // Re-enable the Shop component import
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";
import CTA from "./CTA";
import FAQ from "./FAQ";

function Home() {
  return (
    <div className="home">
      <HeroSection />
      <FeaturedPhotos />
      <About />
      <Services />
      <Shop />
      <FAQ />
      <Testimonials />
      <ContactForm />
      <CTA />
    </div>
  );
}

export default Home;
