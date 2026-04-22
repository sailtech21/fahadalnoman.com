import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "./SectionWrapper";
import { skills } from "@/lib/data";

const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-primary font-mono">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
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

const SkillsSection = () => (
  <SectionWrapper id="skills" title="Skills & |Expertise" subtitle="Technologies I work with daily to build exceptional products.">
    <div className="max-w-2xl mx-auto glass-strong rounded-2xl p-8 glow-purple space-y-6">
      {skills.map((s, i) => (
        <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
