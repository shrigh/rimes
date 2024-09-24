"use client";
import React from "react";
import { motion } from "framer-motion";

const SmoothFadingCircle: React.FC = () => {
  const circleCount = 5;

  const containerVariants = {
    start: { x: "0%" },
    end: { x: "100%", transition: { duration: 1.5, ease: "easeOut" } },
  };

  const circleVariants = {
    start: (i: number) => ({
      opacity: i === circleCount - 1 ? 1 : 0.2 + i * 0.2,
      x: "0%",
    }),
    end: (i: number) => ({
      opacity: i === circleCount - 1 ? 1 : 0.2 + i * 0.2,
      x: `${(circleCount - 1 - i) * 30}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="flex p-2 pl-4 pt-3 justify-start h-24 overflow-hidden ">
      <motion.div
        className=""
        variants={containerVariants}
        initial="start"
        animate="end"
      >
        {[...Array(circleCount)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-20 h-20 rounded-full bg-[#85C7AD]"
            variants={circleVariants}
            custom={index}
            initial="start"
            animate="end"
            style={{ left: `${index * 30}%` }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SmoothFadingCircle;
