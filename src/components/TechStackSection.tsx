import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { techStack } from "@/lib/data";
import {
  SiReact, SiNodedotjs, SiLaravel, SiPhp, SiMysql, SiGithub, SiVercel, SiVisualstudiocode,
} from "react-icons/si";
import { Cloud, Server, Brain } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  React: <SiReact size={32} />,
  "Node.js": <SiNodedotjs size={32} />,
  Laravel: <SiLaravel size={32} />,
  PHP: <SiPhp size={32} />,
  MySQL: <SiMysql size={32} />,
  "VPS / DevOps": <Server size={32} />,
  GitHub: <SiGithub size={32} />,
  Vercel: <SiVercel size={32} />,
  Hostinger: <Cloud size={32} />,
  "Claude AI": <Brain size={32} />,
  "VS Code": <SiVisualstudiocode size={32} />,
};

const TechStackSection = () => (
  <SectionWrapper id="tech" title="Tech |Stack" subtitle="Tools and technologies powering my development workflow.">
    <div className="flex flex-wrap justify-center gap-6">
      {techStack.map((t, i) => (
        <motion.div
          key={t}
          whileHover={{ scale: 1.1, y: -4 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="glass-strong rounded-2xl p-6 flex flex-col items-center gap-3 min-w-[120px] hover:glow-cyan transition-all group"
        >
          <div className="text-primary/70 group-hover:text-primary transition-colors">{iconMap[t]}</div>
          <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">{t}</span>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default TechStackSection;
