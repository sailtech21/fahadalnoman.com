import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { services } from "@/lib/data";
import { Globe, Code2, ShoppingCart, Server, Brain } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  globe: <Globe size={28} />,
  code: <Code2 size={28} />,
  cart: <ShoppingCart size={28} />,
  server: <Server size={28} />,
  brain: <Brain size={28} />,
};

const ServicesSection = () => (
  <SectionWrapper id="services" title="Services I |Offer" subtitle="End-to-end solutions from concept to deployment.">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          whileHover={{ y: -4 }}
          className="glass-strong rounded-2xl p-7 group hover:glow-purple transition-all duration-300"
        >
          <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{iconMap[s.icon]}</div>
          <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ServicesSection;
