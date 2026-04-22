import PageLayout from "@/components/PageLayout";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { services, whyChooseMe } from "@/lib/data";
import { Globe, Code2, ShoppingCart, Server, Brain, CheckCircle2, Search, Paintbrush, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const iconMap: Record<string, React.ReactNode> = {
  globe: <Globe size={28} />,
  code: <Code2 size={28} />,
  cart: <ShoppingCart size={28} />,
  server: <Server size={28} />,
  brain: <Brain size={28} />,
};

const processSteps = [
  { icon: <Search size={24} />, title: "Discovery", description: "Understanding your business goals, target audience, and project requirements through in-depth consultation." },
  { icon: <Paintbrush size={24} />, title: "Design", description: "Creating wireframes and mockups that align with your brand identity and deliver the best user experience." },
  { icon: <Code2 size={24} />, title: "Develop", description: "Building your solution with clean, scalable code using modern technologies and best practices." },
  { icon: <Rocket size={24} />, title: "Deploy & Support", description: "Launching your project on production servers with ongoing maintenance and performance monitoring." },
];

const ServicesPage = () => (
  <PageLayout>
    <SectionWrapper id="services" title="Services I |Offer" subtitle="End-to-end solutions from concept to deployment.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-16">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass-strong rounded-2xl p-6 md:p-7 group hover:glow-purple transition-all duration-300"
          >
            <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{iconMap[s.icon]}</div>
            <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Process */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-center mb-2">My <span className="text-gradient">Process</span></h3>
        <p className="text-muted-foreground text-center mb-10">How I take your idea from concept to reality.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-strong rounded-2xl p-6 text-center hover:glow-cyan transition-all relative"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary">
                {i + 1}
              </div>
              <div className="text-primary mb-3 flex justify-center">{step.icon}</div>
              <h4 className="font-semibold mb-2">{step.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Me */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-2">Why Choose <span className="text-gradient">Me</span></h3>
        <p className="text-muted-foreground text-center mb-8">More than a developer — a business partner who delivers results.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
      </div>

      {/* CTA */}
      <div className="glass-strong rounded-2xl p-8 md:p-12 text-center glow-purple">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your <span className="text-gradient">Project?</span></h3>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          Let's discuss your requirements and build something amazing together.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 min-h-[48px] rounded-lg font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Get In Touch <ArrowRight size={16} />
        </Link>
      </div>
    </SectionWrapper>
  </PageLayout>
);

export default ServicesPage;
