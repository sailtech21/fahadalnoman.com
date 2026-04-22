import { motion } from "framer-motion";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "#0B0F19" }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 2.5 }}
      onAnimationComplete={onComplete}
    >
      <motion.div className="text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-gradient"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          ZURVIX
        </motion.h1>
        <motion.div
          className="h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.p
          className="text-foreground mt-4 text-lg md:text-xl font-semibold tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Fahad AL Noman
        </motion.p>
        <motion.p
          className="text-muted-foreground mt-2 text-xs tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          Loading Experience...
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
