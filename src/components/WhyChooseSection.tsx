import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { whyChooseMe } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

const WhyChooseSection = () => (
  <SectionWrapper id="why" title="Why Choose |Me" subtitle="More than a developer — a business partner who delivers results.">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {whyChooseMe.map((item) => (
        <motion.div
          key={item.title}
          whileHover={{ y: -4 }}
          className="glass-strong rounded-2xl p-6 hover:glow-cyan transition-all"
        >
          <CheckCircle2 className="text-primary mb-3" size={24} />
          <h3 className="font-semibold mb-2">{item.title}</h3>
          <p className="text-muted-foreground text-sm">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default WhyChooseSection;
