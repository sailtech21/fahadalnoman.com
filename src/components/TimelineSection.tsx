import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "./SectionWrapper";
import { Briefcase } from "lucide-react";

const TimelineSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <SectionWrapper id="experience" title="Experience |Timeline">
      <div ref={ref} className="max-w-2xl mx-auto relative">
        {/* Line */}
        <motion.div
          className="absolute left-6 top-0 w-px bg-gradient-to-b from-primary to-secondary"
          initial={{ height: 0 }}
          animate={inView ? { height: "100%" } : {}}
          transition={{ duration: 1.5 }}
        />

        {/* Item */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="relative pl-16"
        >
          <div className="absolute left-4 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background z-10" />
          <div className="glass-strong rounded-2xl p-6 glow-cyan">
            <span className="text-xs font-mono text-primary mb-1 block">2021 → Present</span>
            <div className="flex items-center gap-2 mb-2">
              <Briefcase size={16} className="text-secondary" />
              <h3 className="font-semibold">Web Developer</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Sail Technology — Building and maintaining web applications, leading development of
              client projects, and implementing modern tech solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default TimelineSection;
