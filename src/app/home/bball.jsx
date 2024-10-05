"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowBigDown } from "lucide-react";

const arrowStyle = {
  display: "block",
  width: "6.125", // Adjusted width to accommodate 98px
  height: "6.125", // Adjusted height to accommodate 98px
};

const bounceTransition = {
  y: {
    duration: 1.5, // Slower bounce speed
    repeat: 1, // 7 bounces total
    ease: "easeInOut", // Smooth transition
  },
};

function BouncingArrow() {
  return (
    <div
      style={{
        width: "6.125rem", // Updated width to match arrow size
        height: "6.125rem", // Updated height to match arrow size
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        style={arrowStyle}
        animate={{
          y: ["0%", "-100%", "0%", "-75%", "0%", "-50%", "0%"], // Adjusted bounce heights for smoother effect
        }}
        transition={bounceTransition}
      >
        <ArrowBigDown size={98} fill="#000080" color="none" />{" "}
        {/* Arrow size increased */}
      </motion.div>
    </div>
  );
}

export default BouncingArrow;
