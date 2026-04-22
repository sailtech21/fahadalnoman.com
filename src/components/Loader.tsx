import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import profileImg from "@/assets/fahad-loader.png";

const nameText = "Fahad Al Noman";

// Sketch lines that simulate "drawing" strokes around/over the portrait
const sketchLines = [
  // Face outline
  { d: "M 80 20 Q 40 40 35 100 Q 30 160 60 200 Q 90 240 130 245 Q 170 240 200 200 Q 225 160 220 100 Q 215 40 180 20 Q 140 5 80 20", delay: 0.1 },
  // Hair strokes
  { d: "M 60 60 Q 70 20 120 10 Q 170 5 200 30 Q 220 50 225 80", delay: 0.3 },
  { d: "M 50 80 Q 55 40 90 20 Q 130 5 160 15", delay: 0.5 },
  // Eye area
  { d: "M 75 105 Q 85 95 105 100 Q 115 105 110 112", delay: 0.9 },
  { d: "M 145 105 Q 155 95 175 100 Q 185 105 180 112", delay: 1.0 },
  // Nose
  { d: "M 130 110 Q 125 140 120 155 Q 115 160 125 165", delay: 1.2 },
  // Mouth
  { d: "M 100 185 Q 120 200 140 195 Q 160 190 165 185", delay: 1.4 },
  // Shoulder lines
  { d: "M 30 230 Q 50 260 130 270 Q 210 260 230 230", delay: 1.6 },
];

// Total sketch duration: last delay (1.6) + path duration (1.0) + hold (0.4)
const SKETCH_PHASE_DURATION = 3000;
// Reveal duration in ms
const REVEAL_PHASE_DURATION = 1600;

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"sketching" | "revealing" | "text" | "done">("sketching");
  const phaseRef = useRef(phase);
  phaseRef.current = phase;

  // Use timers for reliable phase transitions instead of onAnimationComplete
  useEffect(() => {
    const t1 = setTimeout(() => {
      if (phaseRef.current === "sketching") setPhase("revealing");
    }, SKETCH_PHASE_DURATION);

    const t2 = setTimeout(() => {
      if (phaseRef.current === "revealing") setPhase("text");
    }, SKETCH_PHASE_DURATION + REVEAL_PHASE_DURATION);

    const t3 = setTimeout(() => {
      if (phaseRef.current === "text") setPhase("done");
    }, SKETCH_PHASE_DURATION + REVEAL_PHASE_DURATION + 1400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ background: "#0B0F19" }}
      initial={{ opacity: 1 }}
      animate={phase === "done" ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (phase === "done") onComplete();
      }}
    >
      <div className="relative flex flex-col items-center">
        {/* Ambient glow */}
        <motion.div
          className="absolute w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsla(183,100%,50%,0.1) 0%, hsla(252,100%,69%,0.04) 40%, transparent 70%)",
          }}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />

        {/* Portrait container */}
        <div className="relative w-52 h-60 md:w-64 md:h-72">
          {/* SVG sketch overlay — draws first */}
          <motion.svg
            viewBox="0 0 260 280"
            className="absolute inset-0 w-full h-full z-20"
            fill="none"
            initial={{ opacity: 1 }}
            animate={
              phase === "revealing" || phase === "text" || phase === "done"
                ? { opacity: 0 }
                : { opacity: 1 }
            }
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {sketchLines.map((line, i) => (
              <motion.path
                key={i}
                d={line.d}
                stroke="url(#sketchGradient)"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{
                  pathLength: {
                    delay: line.delay,
                    duration: 1.0,
                    ease: [0.65, 0, 0.35, 1],
                  },
                  opacity: { delay: line.delay, duration: 0.15 },
                }}
              />
            ))}
            <defs>
              <linearGradient id="sketchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(183, 100%, 50%)" />
                <stop offset="50%" stopColor="hsl(252, 100%, 69%)" />
                <stop offset="100%" stopColor="hsl(348, 100%, 65%)" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* Portrait image — revealed via expanding radial clip */}
          <motion.div
            className="absolute inset-0 rounded-2xl overflow-hidden z-10"
            style={{
              backgroundImage: `url(${profileImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
            initial={{ clipPath: "circle(0% at 50% 40%)", opacity: 0 }}
            animate={
              phase === "revealing" || phase === "text" || phase === "done"
                ? { clipPath: "circle(80% at 50% 40%)", opacity: 1 }
                : { clipPath: "circle(0% at 50% 40%)", opacity: 0 }
            }
            transition={{
              clipPath: { duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] },
              opacity: { duration: 0.3 },
            }}
          />

          {/* Shimmer sweep */}
          {(phase === "text" || phase === "done") && (
            <motion.div
              className="absolute inset-0 z-30 rounded-2xl overflow-hidden pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 35%, rgba(0,245,255,0.15) 50%, transparent 65%)",
                }}
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </motion.div>
          )}

          {/* Border glow */}
          <motion.div
            className="absolute -inset-[2px] rounded-2xl z-10 pointer-events-none"
            style={{
              border: "1px solid transparent",
              background:
                "linear-gradient(#0B0F19, #0B0F19) padding-box, linear-gradient(135deg, hsl(183,100%,50%), hsl(252,100%,69%), hsl(348,100%,65%)) border-box",
            }}
            initial={{ opacity: 0 }}
            animate={
              phase === "text" || phase === "done"
                ? { opacity: 1 }
                : { opacity: 0 }
            }
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </div>

        {/* Name text */}
        <div className="mt-8 overflow-hidden">
          <div className="flex items-baseline justify-center gap-[2px]">
            {nameText.split("").map((char, i) => (
              <motion.span
                key={i}
                className={`text-2xl md:text-3xl tracking-wide ${
                  i < 5
                    ? "font-bold text-gradient"
                    : "font-light text-foreground"
                } ${char === " " ? "w-2" : ""}`}
                style={{
                  fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
                }}
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={
                  phase === "text" || phase === "done"
                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                    : { opacity: 0, y: 24, filter: "blur(8px)" }
                }
                transition={{
                  delay: i * 0.045,
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Decorative line */}
        <motion.div
          className="h-px mx-auto mt-4"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(183,100%,50%,0.5), hsl(252,100%,69%,0.5), transparent)",
          }}
          initial={{ width: 0, opacity: 0 }}
          animate={
            phase === "text" || phase === "done"
              ? { width: 180, opacity: 1 }
              : { width: 0, opacity: 0 }
          }
          transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default Loader;
