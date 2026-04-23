import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, ExternalLink, MessageCircle } from "lucide-react";

const codeLines = [
  'const developer = "Fahad Al Noman";',
  'const role = "CEO & Founder";',
  'const company = "ZURVIX";',
  'const skills = ["React", "Node", "Laravel"];',
  'const passion = "Building the future";',
  "",
  "// Ready to build something amazing?",
  "startProject();",
];

const HeroSection = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < codeLines.length) {
        setDisplayedLines((prev) => [...prev, codeLines[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.p
            className="text-primary text-sm font-mono mb-2 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            &lt;hello world /&gt;
          </motion.p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2">
            Hi, I'm{" "}
            <span className="text-gradient">Fahad Al Noman</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary font-medium mb-4">
            Full Stack Web Developer
          </p>
          <p className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed">
            I build high-performance websites & scalable apps for modern businesses 🚀
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#work"
              className="px-6 py-3 rounded-lg font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              View Work <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg font-medium glass border-primary/30 text-primary hover:bg-primary/10 transition-colors flex items-center gap-2"
            >
              Hire Me <ExternalLink size={16} />
            </a>
            <a
              href="https://wa.me/+8801601345600"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-medium bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20 transition-colors flex items-center gap-2"
            >
              WhatsApp <MessageCircle size={16} />
            </a>
          </div>
        </motion.div>

        {/* Right - Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden lg:block"
        >
          <div className="glass-strong rounded-2xl overflow-hidden glow-cyan">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs text-muted-foreground ml-2 font-mono">fahad.ts</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-1 min-h-[280px]">
              {displayedLines.map((line, i) => {
                if (!line && line !== "") return null;
                const isConst = typeof line === "string" && line.includes("const");
                const isComment = typeof line === "string" && line.startsWith("//");
                const isStart = typeof line === "string" && line.includes("startProject");
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-4"
                  >
                    <span className="text-muted-foreground/50 select-none w-6 text-right">{i + 1}</span>
                    <span>
                      {isConst && (
                        <>
                          <span className="text-purple-400">const </span>
                          <span className="text-foreground">{line.split("const ")[1]?.split(" =")[0]}</span>
                          <span className="text-muted-foreground"> = </span>
                          <span className="text-green-400">{line.split("= ")[1] ?? ""}</span>
                        </>
                      )}
                      {isComment && <span className="text-muted-foreground/60">{line}</span>}
                      {isStart && <span className="text-primary">{line}</span>}
                      {!isConst && !isComment && !isStart && (
                        <span className="text-muted-foreground/40">{line}</span>
                      )}
                    </span>
                  </motion.div>
                );
              })}
              <motion.span
                className="inline-block w-2 h-5 bg-primary ml-10"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
