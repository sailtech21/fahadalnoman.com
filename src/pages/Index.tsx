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
import ReviewsSection from "@/components/ReviewsSection";
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
        keywords="Fahad Al Noman, Full Stack Web Developer, React Developer, Laravel Developer, Web Developer Bangladesh, Hire Web Developer, Portfolio, ZURVIX"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          mainEntity: {
            "@type": "Person",
            name: "Fahad Al Noman",
            url: "https://fahadalnoman.com",
            jobTitle: "Full Stack Web Developer",
            worksFor: { "@type": "Organization", name: "ZURVIX" },
            knowsAbout: ["React", "Laravel", "Node.js", "PHP", "MySQL", "DevOps", "AI Integration"],
            sameAs: [
              "https://www.facebook.com/Fahadnomanofficial/",
              "https://www.instagram.com/_myself_fahad",
              "https://www.linkedin.com/in/fahad-al-noman-b14042263/",
            ],
          },
        }}
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
        <ReviewsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
