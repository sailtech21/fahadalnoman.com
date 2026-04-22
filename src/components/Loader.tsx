import { motion } from "framer-motion";
import { useMemo } from "react";
import profileImg from "@/assets/fahad-loader.png";

const GRID = 3;
const TOTAL_SEGMENTS = GRID * GRID;

// Generate random starting positions for each segment
const generateSegmentVariants = (row: number, col: number) => {
  const angles = [
    { x: -120, y: -80, r: -25 },
    { x: 0, y: -140, r: 15 },
    { x: 130, y: -60, r: 30 },
    { x: -150, y: 20, r: -20 },
    { x: 0, y: 0, r: 0 },
    { x: 160, y: 10, r: 25 },
    { x: -100, y: 120, r: -30 },
    { x: 20, y: 150, r: -15 },
    { x: 110, y: 100, r: 20 },
  ];
  const idx = row * GRID + col;
  const a = angles[idx];

  return {
    hidden: {
      x: a.x,
      y: a.y,
      rotate: a.r,
      scale: 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      opacity: 1,
    },
  };
};

// Stagger order: outside-in spiral
const staggerOrder = [0, 1, 2, 5, 8, 7, 6, 3, 4];

const nameText = "Fahad Al Noman";

// Floating particles
const particles = [
  { x: -180, y: -120, size: 4, color: "hsla(183,100%,50%,0.6)" },
  { x: 200, y: -80, size: 3, color: "hsla(252,100%,69%,0.5)" },
  { x: -160, y: 100, size: 5, color: "hsla(183,100%,50%,0.4)" },
  { x: 190, y: 130, size: 3, color: "hsla(252,100%,69%,0.6)" },
  { x: -60, y: -160, size: 4, color: "hsla(183,100%,50%,0.5)" },
  { x: 80, y: 170, size: 3, color: "hsla(348,100%,65%,0.4)" },
  { x: 140, y: -150, size: 2, color: "hsla(183,100%,50%,0.3)" },
  { x: -120, y: 160, size: 3, color: "hsla(252,100%,69%,0.4)" },
];

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const segments = useMemo(() => {
    const segs = [];
    for (let r = 0; r < GRID; r++) {
      for (let c = 0; c < GRID; c++) {
        const idx = r * GRID + c;
        const delay = 0.3 + staggerOrder[idx] * 0.15;
        segs.push({ row: r, col: c, delay, variants: generateSegmentVariants(r, c) });
      }
    }
    return segs;
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ background: "#0B0F19" }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 4.0, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      <div className="relative flex flex-col items-center">
        {/* Floating particles that converge */}
        {particles.map((p, i) => (
          <motion.div
            key={`p-${i}`}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              background: p.color,
              filter: `blur(${p.size > 3 ? 1 : 0}px)`,
            }}
            initial={{ x: p.x, y: p.y, opacity: 0, scale: 0 }}
            animate={{
              x: [p.x, p.x * 0.3, 0],
              y: [p.y, p.y * 0.3, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2.2,
              delay: i * 0.08,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Portrait assembly container */}
        <div className="relative w-52 h-60 md:w-64 md:h-72">
          {/* Glow behind portrait */}
          <motion.div
            className="absolute -inset-8 rounded-full"
            style={{
              background: "radial-gradient(circle, hsla(183,100%,50%,0.2) 0%, hsla(252,100%,69%,0.08) 40%, transparent 70%)",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0, 0.8, 0.5], scale: [0.5, 0.5, 1.2, 1] }}
            transition={{ duration: 1.5, delay: 1.8, ease: "easeInOut" }}
          />

          {/* Grid segments */}
          {segments.map(({ row, col, delay, variants }) => {
            const pctW = 100 / GRID;
            const pctH = 100 / GRID;
            const clipTop = row * pctH;
            const clipLeft = col * pctW;
            const clipBottom = 100 - (row + 1) * pctH;
            const clipRight = 100 - (col + 1) * pctW;

            return (
              <motion.div
                key={`${row}-${col}`}
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${profileImg})`,
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center",
                  clipPath: `inset(${clipTop}% ${clipRight}% ${clipBottom}% ${clipLeft}%)`,
                }}
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay,
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              />
            );
          })}

          {/* Gradient border trace */}
          <motion.div
            className="absolute -inset-1 rounded-2xl loader-border-trace"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1, 0.6] }}
            transition={{ duration: 1.2, delay: 2.2, ease: "easeInOut" }}
          />
        </div>

        {/* Name — letter by letter */}
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 2.6 + i * 0.05,
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Subtle tagline */}
        <motion.div
          className="h-px mx-auto mt-4 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 200, opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.4, ease: "easeInOut" }}
        />

        <motion.p
          className="text-muted-foreground mt-3 text-[11px] tracking-[0.25em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 3.5, duration: 0.5 }}
        >
          Loading Experience...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
