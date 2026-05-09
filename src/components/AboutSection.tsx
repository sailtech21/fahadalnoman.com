import SectionWrapper from "./SectionWrapper";
import { GraduationCap, Briefcase, MapPin, BookOpen, Code, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { education, experience } from "@/lib/data";
import profileImage from "@/assets/fahad-profile.png";

const educationIcons: Record<string, React.ReactNode> = {
  graduation: <GraduationCap className="text-secondary" size={22} />,
  code: <Code className="text-primary" size={22} />,
  book: <BookOpen className="text-accent" size={22} />,
  building: <Building2 className="text-secondary" size={22} />,
};

const AboutSection = () => (
  <SectionWrapper id="about" title="About |Me" subtitle="From a small town to building digital solutions for the world.">
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Profile Image & Story */}
      <div className="lg:col-span-1 flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden glass-strong glow-cyan p-1">
            <img
              src={profileImage}
              alt="Fahad Al Noman"
              className="w-full h-full object-cover object-top rounded-xl"
            />
          </div>
          <div className="absolute -bottom-3 -right-3 glass-strong rounded-xl px-3 py-1.5 text-xs font-mono text-primary border border-primary/20">
            CEO @ ZURVIX
          </div>
        </motion.div>

        {/* Location */}
        <div className="glass-strong rounded-2xl p-5 w-full space-y-3">
          <div className="flex items-center gap-2 text-primary">
            <MapPin size={16} />
            <span className="text-sm font-semibold">Location</span>
          </div>
          <div className="space-y-2 text-sm">
              <div>
                <p className="text-muted-foreground text-xs">Current</p>
                <p className="text-foreground font-medium">Dhaka, Bangladesh</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Permanent</p>
                <p className="text-foreground font-medium">Jhenaidah, Khulna, Bangladesh</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Moving to</p>
                <p className="text-foreground font-medium">Valletta, Malta</p>
              </div>
            </div>
        </div>

        {/* Story */}
        <div className="glass-strong rounded-2xl p-5 w-full">
          <p className="text-muted-foreground text-sm leading-relaxed">
            From <span className="text-foreground font-medium">Jhenaidah</span> to{" "}
            <span className="text-foreground font-medium">Dhaka</span>, I turned my passion for technology
            into a career building production-grade web applications. As the{" "}
            <span className="text-primary font-medium">CEO & Founder of ZURVIX</span>, I lead a vision of
            delivering premium digital solutions worldwide.
          </p>
        </div>
      </div>

      {/* Education & Experience */}
      <div className="lg:col-span-2 space-y-6">
        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="text-secondary" size={22} />
            <h3 className="text-xl font-semibold">Education</h3>
          </div>
          <div className="grid sm:grid-cols-1 gap-3">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-strong rounded-xl p-5 hover:glow-cyan transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 shrink-0">
                    {educationIcons[edu.icon]}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1">{edu.institution}</p>
                    {edu.location && (
                      <p className="text-muted-foreground text-xs mt-0.5 flex items-center gap-1">
                        <MapPin size={12} /> {edu.location}
                      </p>
                    )}
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="inline-block text-xs font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {edu.status}
                      </span>
                      {edu.start && (
                        <span className="inline-block text-xs font-mono text-muted-foreground">
                          Start: {edu.start}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="text-accent" size={22} />
            <h3 className="text-xl font-semibold">Work Experience</h3>
          </div>
          <div className="space-y-3">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-strong rounded-xl p-5 hover:glow-purple transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 shrink-0">
                    <Building2 className="text-secondary" size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-mono text-primary">{exp.period}</span>
                    </div>
                    <p className="text-secondary text-sm font-medium mt-0.5">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
