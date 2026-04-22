import Navbar from "./Navbar";
import Footer from "./Footer";
import ParticlesBackground from "./ParticlesBackground";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const PageLayout = ({ children }: { children: ReactNode }) => (
  <div className="relative bg-grid min-h-screen">
    <ParticlesBackground />
    <Navbar />
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {children}
    </motion.main>
    <Footer />
  </div>
);

export default PageLayout;
