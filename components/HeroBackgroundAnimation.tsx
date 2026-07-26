"use client";

import { motion } from "framer-motion";

export default function HeroBackgroundAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dynamic Animated Glow Orbs */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/15 dark:bg-cyan-500/10 rounded-full blur-[100px]"
      />

      <motion.div
        animate={{
          x: [0, -40, 25, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-cyan-400/10 dark:bg-blue-600/15 rounded-full blur-[120px]"
      />

      {/* Interactive Grid Line Effect */}
      <div 
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
}
