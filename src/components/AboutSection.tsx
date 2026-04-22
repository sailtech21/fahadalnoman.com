import SectionWrapper from "./SectionWrapper";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";

const AboutSection = () => (
  <SectionWrapper id="about" title="About |Me" subtitle="From a small town to building digital solutions for the world.">
    <div className="grid md:grid-cols-2 gap-8">
      {/* Story */}
      <div className="glass-strong rounded-2xl p-8 glow-cyan">
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="text-primary" size={20} />
          <h3 className="text-xl font-semibold">My Journey</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          From <span className="text-foreground font-medium">Jhenaidah</span> to{" "}
          <span className="text-foreground font-medium">Dhaka</span>, I turned my passion for technology
          into a career building production-grade web applications. As the{" "}
          <span className="text-primary font-medium">CEO & Founder of ZURVIX</span>, I lead a vision of
          delivering premium digital solutions to businesses worldwide.
        </p>
      </div>

      {/* Education & Experience */}
      <div className="space-y-4">
        <div className="glass-strong rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <GraduationCap className="text-secondary" size={20} />
            <h3 className="text-lg font-semibold">Education</h3>
          </div>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li className="flex justify-between"><span>Times University</span><span className="text-foreground">Economics - Honours</span></li>
            <li className="flex justify-between"><span>Diploma</span><span className="text-foreground">CSE</span></li>
            <li className="flex justify-between"><span>HSC</span><span className="text-foreground">Commerce</span></li>
          </ul>
        </div>
        <div className="glass-strong rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Briefcase className="text-accent" size={20} />
            <h3 className="text-lg font-semibold">Experience</h3>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Web Developer @ Sail Technology</span>
            <span className="text-primary font-mono">2021 – Present</span>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
