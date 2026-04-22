import { motion } from "framer-motion";
import profileImg from "@/assets/fahad-profile.png";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "#0B0F19" }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 3.2 }}
      onAnimationComplete={onComplete}
    >
      <div className="text-center flex flex-col items-center">
        {/* SVG Portrait Animation */}
        <div className="relative w-48 h-56 md:w-56 md:h-64">
          {/* Clipped portrait image - fades in after stroke draws */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <svg viewBox="0 0 280 320" className="w-full h-full">
              <defs>
                <clipPath id="portrait-clip">
                  <path d="M140,20 C175,20 210,35 230,65 C250,95 255,130 250,165 C248,185 240,200 235,215 C250,235 260,250 260,270 C260,290 250,305 230,310 C200,318 170,320 140,320 C110,320 80,318 50,310 C30,305 20,290 20,270 C20,250 30,235 45,215 C40,200 32,185 30,165 C25,130 30,95 50,65 C70,35 105,20 140,20 Z" />
                </clipPath>
              </defs>
              <image
                href={profileImg}
                x="0" y="0"
                width="280" height="320"
                clipPath="url(#portrait-clip)"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>
          </motion.div>

          {/* Animated stroke outline */}
          <svg viewBox="0 0 280 320" className="absolute inset-0 w-full h-full">
            <path
              d="M140,20 C175,20 210,35 230,65 C250,95 255,130 250,165 C248,185 240,200 235,215 C250,235 260,250 260,270 C260,290 250,305 230,310 C200,318 170,320 140,320 C110,320 80,318 50,310 C30,305 20,290 20,270 C20,250 30,235 45,215 C40,200 32,185 30,165 C25,130 30,95 50,65 C70,35 105,20 140,20 Z"
              fill="none"
              stroke="hsl(183, 100%, 50%)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="loader-stroke-anim"
            />
          </svg>

          {/* Glow ring behind */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, hsla(183,100%,50%,0.15) 0%, transparent 70%)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.6, 0.3], scale: [0.8, 1.1, 1] }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </div>

        {/* Name */}
        <motion.p
          className="text-foreground mt-6 text-xl md:text-2xl font-semibold tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          Fahad AL Noman
        </motion.p>

        {/* Gradient line */}
        <motion.div
          className="h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-3"
          initial={{ width: 0 }}
          animate={{ width: 160 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        />

        <motion.p
          className="text-muted-foreground mt-3 text-xs tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
        >
          Loading Experience...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
