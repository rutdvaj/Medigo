"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FallingArrow = () => {
  const arrowVariants = {
    initial: { y: 0 },
    animate: {
      y: ["0%", "100%", "90%", "100%", "95%", "100%", "98%", "100%"],
      transition: {
        duration: 2.5,
        times: [0, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative h-screen bg-gray-100 overflow-hidden">
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2"
        style={{ top: "24px" }} // Start from top of the screen
        variants={arrowVariants}
        initial="initial"
        animate="animate"
      >
        <ChevronDown className="text-blue-500" size={48} />
      </motion.div>
    </div>
  );
};

export default FallingArrow;
