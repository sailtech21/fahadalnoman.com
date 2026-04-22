import PageLayout from "@/components/PageLayout";
import SectionWrapper from "@/components/SectionWrapper";
import { GraduationCap, Briefcase, MapPin, BookOpen, Code, Building2, Heart, Coffee, Gamepad2, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { education, experience } from "@/lib/data";
import profileImage from "@/assets/fahad-profile.png";

const educationIcons: Record<string, React.ReactNode> = {
  graduation: <GraduationCap className="text-secondary" size={22} />,
  code: <Code className="text-primary" size={22} />,
  book: <BookOpen className="text-accent" size={22} />,
};

const interests = [
  { icon: <Code size={18} />, label: "Coding" },
  { icon: <Coffee size={18} />, label: "Coffee" },
  { icon: <Gamepad2 size={18} />, label: "Gaming" },
  { icon: <Globe size={18} />, label: "Traveling" },
];

const AboutPage = () => (
  <PageLayout>
    <SectionWrapper id="about" title="About |Me" subtitle="From a small town to building digital solutions for the world.">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile & Info */}
        <div className="lg:col-span-1 flex flex-col items-center gap-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden glass-strong glow-cyan p-1">
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
            </div>
          </div>

          {/* Interests */}
          <div className="glass-strong rounded-2xl p-5 w-full">
            <div className="flex items-center gap-2 text-secondary mb-3">
              <Heart size={16} />
              <span className="text-sm font-semibold">Interests</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {interests.map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="text-primary">{item.icon}</span>
                  {item.label}
                </div>
              ))}
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
        <div className="lg:col-span-2 space-y-8">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-6 glow-cyan"
          >
            <h3 className="text-xl font-semibold mb-3">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm Fahad Al Noman — a full-stack web developer, entrepreneur, and the CEO & Founder of ZURVIX.
              I specialize in building high-performance websites and scalable applications using modern technologies
              like React, Laravel, Node.js, and more. With years of experience delivering production-grade solutions
              for clients across Bangladesh, Canada, Australia, Malta, and beyond, I bring a unique blend of
              technical expertise and business understanding to every project.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              My journey started with curiosity about how the web works and grew into a full-blown career.
              Today, I manage a growing team at ZURVIX while still getting my hands dirty with code every day.
              I believe in clean code, pixel-perfect design, and delivering real value to clients.
            </p>
          </motion.div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-secondary" size={22} />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-3">
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
                      <span className="inline-block mt-2 text-xs font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {edu.status}
                      </span>
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

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Years Experience", value: "4+" },
              { label: "Projects Delivered", value: "50+" },
              { label: "Countries Served", value: "5+" },
              { label: "Happy Clients", value: "30+" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="glass-strong rounded-xl p-4 text-center hover:glow-cyan transition-all"
              >
                <p className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  </PageLayout>
);

export default AboutPage;
