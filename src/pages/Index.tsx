import { useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Briefcase, BookOpen, Mail } from "lucide-react";

const highlights = [
  { icon: <Code2 size={24} />, title: "Skills & Tech", desc: "React, Laravel, Node.js and more", path: "/skills" },
  { icon: <Briefcase size={24} />, title: "My Work", desc: "50+ projects delivered worldwide", path: "/work" },
  { icon: <BookOpen size={24} />, title: "Blog", desc: "Insights and tutorials", path: "/blog" },
  { icon: <Mail size={24} />, title: "Contact", desc: "Let's build something great", path: "/contact" },
];

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <div className={`relative bg-grid ${loaded ? "" : "opacity-0"}`}>
        <ParticlesBackground />
        <Navbar />
        <HeroSection />

        {/* Quick Navigation Cards */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className="glass-strong rounded-2xl p-5 md:p-6 block group hover:glow-cyan transition-all h-full"
                  >
                    <div className="text-primary mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h3 className="font-semibold text-sm md:text-base mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm mb-3">{item.desc}</p>
                    <span className="text-primary text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Explore <ArrowRight size={14} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
