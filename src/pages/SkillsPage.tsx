import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills, techStack } from "@/lib/data";
import {
  SiReact, SiNodedotjs, SiLaravel, SiPhp, SiMysql, SiGithub, SiVercel,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { Cloud, Server, Brain, Wrench, Zap, Target } from "lucide-react";

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
  "VS Code": <VscCode size={32} />,
};

const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-primary font-mono">{level}%</span>
      </div>
      <div className="h-3 rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, hsl(183, 100%, 50%), hsl(252, 100%, 69%))",
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.15, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const additionalSkills = [
  { name: "REST API Design", icon: <Zap size={20} /> },
  { name: "Database Architecture", icon: <Target size={20} /> },
  { name: "Server Management", icon: <Server size={20} /> },
  { name: "CI/CD Pipelines", icon: <Wrench size={20} /> },
  { name: "SEO Optimization", icon: <Target size={20} /> },
  { name: "Performance Tuning", icon: <Zap size={20} /> },
];

const SkillsPage = () => (
  <PageLayout>
    <SectionWrapper id="skills" title="Skills & |Expertise" subtitle="Technologies I work with daily to build exceptional products.">
      {/* Core Skills */}
      <div className="max-w-3xl mx-auto glass-strong rounded-2xl p-6 md:p-8 glow-purple space-y-6 mb-12">
        <h3 className="text-lg font-semibold text-center mb-4">Core Proficiency</h3>
        {skills.map((s, i) => (
          <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
        ))}
      </div>

      {/* Tech Stack */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-2">Tech <span className="text-gradient">Stack</span></h3>
        <p className="text-muted-foreground text-center mb-8">Tools and technologies powering my development workflow.</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {techStack.map((t, i) => (
            <motion.div
              key={t}
              whileHover={{ scale: 1.1, y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-strong rounded-2xl p-4 md:p-6 flex flex-col items-center gap-3 w-[100px] md:min-w-[120px] hover:glow-cyan transition-all group"
            >
              <div className="text-primary/70 group-hover:text-primary transition-colors">{iconMap[t]}</div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">{t}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Skills */}
      <div>
        <h3 className="text-2xl font-bold text-center mb-2">Additional <span className="text-gradient">Skills</span></h3>
        <p className="text-muted-foreground text-center mb-8">Beyond coding — skills that complete the full development picture.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {additionalSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-strong rounded-xl p-4 flex items-center gap-3 hover:glow-purple transition-all"
            >
              <span className="text-primary shrink-0">{skill.icon}</span>
              <span className="text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  </PageLayout>
);

export default SkillsPage;
