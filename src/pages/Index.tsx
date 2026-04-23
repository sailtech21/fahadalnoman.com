import { useState } from "react";
import SEO from "@/components/SEO";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TechStackSection from "@/components/TechStackSection";
import TimelineSection from "@/components/TimelineSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <SEO
        title="Fahad Al Noman | Full Stack Web Developer Portfolio"
        description="Fahad Al Noman — Full Stack Web Developer building fast, scalable websites & web apps with React, Laravel, and modern tech. View portfolio & hire today."
        path="/"
      />
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <div className={`relative bg-grid ${loaded ? "" : "opacity-0"}`}>
        <ParticlesBackground />
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ServicesSection />
        <WhyChooseSection />
        <TechStackSection />
        <TimelineSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
