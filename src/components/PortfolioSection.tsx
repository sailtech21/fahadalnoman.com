import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { featuredProjects, bdProjects } from "@/lib/data";
import { ExternalLink, Globe } from "lucide-react";

type Tab = "featured" | "bangladesh";

const ProjectCard = ({ name, url, tech }: { name: string; url: string; tech: string[] }) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -4 }}
    className="glass-strong rounded-2xl overflow-hidden group hover:glow-cyan transition-shadow duration-300"
  >
    <div className="h-40 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center border-b border-border/30">
      <Globe className="text-primary/30 group-hover:text-primary/60 transition-colors" size={48} />
    </div>
    <div className="p-5">
      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{name}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary/80">{t}</span>
        ))}
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
      >
        Visit Website <ExternalLink size={14} />
      </a>
    </div>
  </motion.div>
);

const PortfolioSection = () => {
  const [tab, setTab] = useState<Tab>("featured");
  const projects = tab === "featured" ? featuredProjects : bdProjects;

  return (
    <SectionWrapper id="work" title="My |Work" subtitle="A selection of projects I've built for clients worldwide.">
      <div className="flex justify-center gap-4 mb-10">
        {(["featured", "bangladesh"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
              tab === t
                ? "bg-primary/20 text-primary border border-primary/30"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {t === "featured" ? "🌍 Featured" : "🇧🇩 Bangladesh"}
          </button>
        ))}
      </div>
      <motion.div
        key={tab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((p) => (
          <ProjectCard key={p.url} {...p} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default PortfolioSection;
